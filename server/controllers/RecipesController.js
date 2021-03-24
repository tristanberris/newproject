import express from "express";
import BaseController from "../utils/BaseController";
import { recipesService } from "../services/RecipesService";
import auth0Provider from "@bcwdev/auth0provider";

export class RecipesController extends BaseController {
  constructor() {
    super("api/recipes");
    this.router
      .get("", this.getAll)
      .post("", this.create)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      // .use(auth0Provider.getAuthorizedUserInfo);
  }
  async getAll(req, res, next) {
    try {
      let data = await recipesService.getAll()
      return res.send(data)
  } catch (error) {
      next(error);
  }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      // req.body.creator = req.user.email;
      let data = await recipesService.create(req.body)
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
