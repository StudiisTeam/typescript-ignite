import { CategoriesRepository } from "../../repositories/implemetations/categories-repository";
import { ListCategoriesUseCase } from "./list-categories-usecase";
import { ListCategoryController } from "./list-categories.controller";

const categoryRepository = null
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository)
export const listCategoryController = new ListCategoryController(listCategoriesUseCase)
