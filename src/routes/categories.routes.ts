import { Router } from "express";
import multer from "multer"

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoute = Router();

const upload = multer({
  dest:'./tmp'
})
  

categoriesRoute.post("/", (request, response) => {
  return createCategoryController.handle(request, response)
});

categoriesRoute.get("/", (request, response) => {
  return listCategoriesController.handle(request, response)
});

categoriesRoute.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response)
})

export { categoriesRoute };
