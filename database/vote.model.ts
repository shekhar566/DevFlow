import { model, models, Schema, Types } from "mongoose";

export interface IVote {
  author: Types.ObjectId;
  id: Types.ObjectId;
  actiontype: "questions" | "answer";
  votetype: "upvotes" | "downvotes'";
}
export interface IVoteDoc extends IVote, Document {}
const VoteSchema = new Schema<IVote>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", require: true },
    id: { type: Schema.Types.ObjectId, require: true },
    actiontype: { type: String, enum: ["questions", "answer"], required: true },
    votetype: { type: String, enum: ["upvotes", "downvotes"], required: true },
  },
  { timestamps: true }
);

const Vote = models?.Vote || model<IVote>("Vote", VoteSchema);

export default Vote;
