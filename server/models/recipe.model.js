import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Recipes = new Schema(
  {
    title: { type: String, required: true },
    steps: { type: String, required: true },
    ingredients: { type: String, required: true },
    calorieinfo: { type: String, required: false },
    creatorEmail: { type: String, required: false },
    // recipeId: { type: ObjectId, ref: 'Recipe', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Recipes.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Recipes;
