import { model, models, Schema, Types } from "mongoose";

export interface IAccount {
  userId: Types.ObjectId;
  name: string;
  image?: string;
  password: string;
  providerAccountId: string;
}

const AccountSchema = new Schema<IAccount>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", require: true },
    name: { type: String, require: true },
    image: { type: String, require: true },
    password: { type: String },
    providerAccountId: { type: String, require: true },
  },
  { timestamps: true }
);

const Account = models?.Account || model<IAccount>("Account", AccountSchema);

export default Account;
