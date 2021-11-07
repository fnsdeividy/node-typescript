import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoute = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoute.post("/", (req, res) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return res.status(400).json({ error: "Category already exists !" });
  }

  categoriesRepository.create({ name, description });

  return res.status(201).send();
});

categoriesRoute.get("/", (req, res) => {
  const getAll = categoriesRepository.list();

  return res.json(getAll);
});

export { categoriesRoute };
