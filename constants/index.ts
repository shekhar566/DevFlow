export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Rounds", // Doctors do "Rounds" to check patients. Much better than "Home".
  },
  {
    imgURL: "/icons/users.svg",
    route: "/community",
    label: "Network", // "Community" is generic. "Network" implies professional connections.
  },
  {
    imgURL: "/icons/star.svg",
    route: "/collection",
    label: "Saved Cases", // "Collections" sounds like a library. "Saved Cases" is clinical.
  },
  {
    imgURL: "/icons/suitcase.svg",
    route: "/jobs",
    label: "Career Hub", // "Find Jobs" sounds desperate. "Career Hub" sounds premium.
  },
  {
    imgURL: "/icons/tag.svg",
    route: "/tags",
    label: "Specialties", // We don't use "Tags" in medicine; we use "Specialties" (Cardio, Neuro, etc).
  },
  {
    imgURL: "/icons/user.svg",
    route: "/profile",
    label: "Profile", // Keep this.
  },
  {
    imgURL: "/icons/question.svg",
    route: "/ask-question",
    label: "Post a Case", // We aren't asking generic questions; we are posting clinical cases.
  },
];

// Keep your BADGE_CRITERIA exactly as it is below this.
export const BADGE_CRITERIA = {
  // ... keep your existing code here
  QUESTION_COUNT: {
    BRONZE: 1,
    SILVER: 5,
    GOLD: 1,
  },
  ANSWER_COUNT: {
    BRONZE: 1,
    SILVER: 5,
    GOLD: 1,
  },
  QUESTION_UPVOTES: {
    BRONZE: 1,
    SILVER: 50,
    GOLD: 1,
  },
  ANSWER_UPVOTES: {
    BRONZE: 1,
    SILVER: 50,
    GOLD: 1,
  },
  TOTAL_VIEWS: {
    BRONZE: 1,
    SILVER: 10,
    GOLD: 1,
  },
};
