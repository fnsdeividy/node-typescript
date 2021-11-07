import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoute = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoute.post("/", (req, res) => {
  const { name, description } = req.body;

  categoriesRepository.create({ name, description });

  return res.status(201).send();
});

categoriesRoute.get('/', (req, res) => {
    const getAll = categoriesRepository.list()

    return res.json(getAll)

})

export { categoriesRoute };
