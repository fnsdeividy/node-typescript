import { Router } from 'express';
import { categoriesRoute } from './categories.routes';
import { specificationsRouter } from './specifications.routes';

const router = Router()

router.use("/categories", categoriesRoute);
router.use("/specifications", specificationsRouter);

export { router }