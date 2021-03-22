import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import RecipesSchema from "../models/recipe.model";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Recipes = mongoose.model("Recipes", RecipesSchema);
}

export const dbContext = new DbContext();
