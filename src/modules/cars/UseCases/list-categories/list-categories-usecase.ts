import { Category } from "../../model/category";
import { ICreateCategoriesRepository } from "../../repositories/categories-repositories/create-repository";

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICreateCategoriesRepository) { }
  execute(): Category[] {
    const categories = this.categoriesRepository.list()
    return categories
  }
}