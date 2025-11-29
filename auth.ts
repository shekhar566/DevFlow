// import NextAuth from "next-auth";
// import gitHub from "next-auth/providers/github";
// import google from "next-auth/providers/google";
// import { api } from "./lib/api";
// import { IAccountDoc } from "./database/account.model";
// import { SignInSchema } from "./lib/validations";
// import { IUserDoc } from "./database/user.model";
// import bcrypt from "bcryptjs";
// import Credentials from "next-auth/providers/credentials";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     gitHub,
//     google,
//     Credentials({
//       async authorize(credentials) {
//         const validatedFields = SignInSchema.safeParse(credentials);

//         if (validatedFields.success) {
//           const { email, password } = validatedFields.data;

//           const { data: existingAccount } = (await api.accounts.getByProvider(
//             email
//           )) as ActionResponse<IAccountDoc>;

//           if (!existingAccount) return null;

//           const { data: existingUser } = (await api.users.getById(
//             existingAccount.userId.toString()
//           )) as ActionResponse<IUserDoc>;

//           if (!existingUser) return null;

//           const isValidPassword = await bcrypt.compare(
//             password,
//             existingAccount.password!
//           );

//           if (isValidPassword) {
//             return {
//               id: existingUser.id,
//               name: existingUser.name,
//               email: existingUser.email,
//               image: existingUser.image,
//             };
//           }
//         }
//         return null;
//       },
//     }),
//   ],

//   callbacks: {
//     async session({ session, token }) {
//       session.user.id = token.sub as string;
//       return session;
//     },

//     async jwt({ token, account }) {
//       if (account) {
//         const { data: existingAccount, success } =
//           (await api.accounts.getByProvider(
//             account.type === "credentials"
//               ? token.email!
//               : account.providerAccountId
//           )) as ActionResponse<IAccountDoc>;

//         if (!success || !existingAccount) return token;

//         const userId = existingAccount.userId;

//         if (userId) token.sub = userId.toString();
//       }

//       return token;
//     },
//     async signIn({ user, profile, account }) {
//       if (account?.type === "credentials") return true;
//       if (account?.type === "oauth" && user?.email) return true;
//       const userInfo = {
//         name: user.name!,
//         email: user.email!,
//         image: user.image!,
//         username:
//           account?.provider === "github"
//             ? (profile?.login as string)
//             : (user.name?.toLowerCase() as string),
//       };

//       const { success } = (await api.auth.oAuthSignIn({
//         user: userInfo,
//         provider: account?.provider as "github" | "google",
//         providerAccountId: account?.providerAccountId || "",
//       })) as ActionResponse;

//       if (!success) return false;

//       return true;
//     },
//   },
// });

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { api } from "./lib/api";
import { SignInSchema } from "./lib/validations";
import { IAccountDoc } from "./database/account.model";
import { IUserDoc } from "./database/user.model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),

    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    Credentials({
      async authorize(credentials) {
        const validatedFields = SignInSchema.safeParse(credentials);

        if (!validatedFields.success) return null;

        const { email, password } = validatedFields.data;

        // Step 1: Get account by email
        const accountResponse = (await api.accounts.getByProvider(
          email
        )) as ActionResponse<IAccountDoc>;

        const existingAccount = accountResponse.data;
        if (!existingAccount || !existingAccount.password) return null;

        // Step 2: Get associated user
        const userResponse = (await api.users.getById(
          existingAccount.userId.toString()
        )) as ActionResponse<IUserDoc>;

        const existingUser = userResponse.data;
        if (!existingUser?._id) return null;

        // Step 3: Compare passwords
        const isValidPassword = await bcrypt.compare(
          password,
          existingAccount.password
        );

        if (!isValidPassword) return null;

        // Step 4: Return user shape for session
        return {
          id: existingUser._id.toString(), // 🔥 now safe
          name: existingUser.name,
          email: existingUser.email,
          image: existingUser.image,
        };
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      if (token.sub) session.user.id = token.sub;
      return session;
    },

    async jwt({ token, account }) {
      if (account) {
        const lookupKey =
          account.type === "credentials"
            ? token.email!
            : account.providerAccountId!;

        const { data: existingAccount } = (await api.accounts.getByProvider(
          lookupKey
        )) as ActionResponse<IAccountDoc>;

        if (existingAccount?.userId)
          token.sub = existingAccount.userId.toString();
      }

      return token;
    },

    async signIn({ user, profile, account }) {
      if (account?.type === "credentials") return true;
      if (!user || !account) return false;

      const username =
        account.provider === "github"
          ? ((profile?.login as string) ?? user.email?.split("@")[0] ?? "user")
          : (user.name?.toLowerCase().replace(/\s+/g, "-") ??
            user.email?.split("@")[0] ??
            "user");

      const result = (await api.auth.oAuthSignIn({
        user: {
          name: user.name!,
          email: user.email!,
          image: user.image!,
          username, // 🔥 FIXED
        },
        provider: account.provider as "github" | "google",
        providerAccountId: account.providerAccountId ?? "",
      })) as ActionResponse;

      return result.success;
    },
  },

  pages: {
    signIn: "/sign-in",
  },
});
