import { model, models, Schema, Types, Document } from "mongoose";

export interface IAnswer {
  author: Types.ObjectId;
  question: Types.ObjectId;
  content: string;
  upvotes: number;
  downvotes: number;
}
export interface IAnswerDoc extends IAnswer, Document {}
const AnswerSchema = new Schema<IAnswer>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", require: true },
    question: { type: Schema.Types.ObjectId, ref: "Question", require: true },
    content: { type: String, require: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
  },
  { timestamps: true }
);
const Answer = models?.Answer || model<IAnswer>("Account", AnswerSchema);

export default Answer;
