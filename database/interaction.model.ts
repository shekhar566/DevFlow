import { model, models, Schema, Types, Document } from "mongoose";

export interface IInteraction {
  user: Types.ObjectId;
  action: string;
  actionId: Types.ObjectId;
  actionType: "questions" | "answer";
}

export interface IInteractionDoc extends IInteraction, Document {}
const InteractionSchema = new Schema<IInteraction>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", require: true },
    action: { type: String, require: true },
    actionId: { type: Schema.Types.ObjectId, require: true },
    actionType: { type: String, enum: ["questions", "answer"], require: true },
  },
  { timestamps: true }
);

const Interaction =
  models?.Interaction || model<IInteraction>("Interaction", InteractionSchema);

export default Interaction;
