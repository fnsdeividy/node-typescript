import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoute = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoute.post("/", (request, response) => {
  return createCategoryController.handle(request, response)
});

categoriesRoute.get("/", (req, res) => {
  const getAll = categoriesRepository.list();

  return res.json(getAll);
});

export { categoriesRoute };
