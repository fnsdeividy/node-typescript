import { Router } from "express";

import { Category } from "../model/Category";

const categoriesRoute = Router();

const categories: Category[] = [];

categoriesRoute.post("/", (req, res) => {
  const { name, description } = req.body;

  const category = new Category()

  Object.assign(category, {
    name,
    description,
    created_at: new Date()
      
  })

  categories.push(category);

  return res.status(201).json({ category });
});

export { categoriesRoute };