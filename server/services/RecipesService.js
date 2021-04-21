import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class RecipesService {
  async findAll(query = {}) {
    let values = await dbContext.Values.find(query).populate(
      "creator",
      "name picture"
    );
    return values;
  }
  async findById(id) {
    let value = await dbContext.Values.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }

  async create(rawData){
      let data = await dbContext.Recipes.create(rawData)
      return data;
  }
  async getAll(req, res, next) {
    try {
      return await dbContext.Recipes.find();
    } catch (error) {
      console.error(error);
    }
  }
  async getById(id) {
    let data = await dbContext.Recipes.findOne({ _id: id})
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board")
    }
    return data
  }
}

export const recipesService = new RecipesService();
