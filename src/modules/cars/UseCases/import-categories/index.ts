import { CategoriesRepository } from "../../repositories/implemetations/categories-repository";
import { ImportCategoriesController } from "./import-categories-controller";
import { ImportCategoryUseCase } from "./import-categories-usecase";

const categoriesRepository = null
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository)
export const importCategoriesController = new ImportCategoriesController(importCategoryUseCase)
