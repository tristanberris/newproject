import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Recipe = new Schema(
  {
    title: { type: String, required: true },
    instructions: { type: String, required: true },
    ingredients: { type: String, required: true },
    calorieinfo: { type: String, required: false },
    creatorEmail: { type: String, required: false },
    // recipeId: { type: ObjectId, ref: 'Recipe', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Recipe.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Recipe;
