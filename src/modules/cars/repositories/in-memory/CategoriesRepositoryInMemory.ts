import { Category } from '@modules/cars/infra/typeorm/entities/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from '@modules/cars/repositories/ICategoriesRepository';

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[];

  constructor() {
    this.categories = [];
  }

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
  async list(): Promise<Category[]> {
    const { categories } = this;
    return categories;
  }
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const newCategory = new Category();
    Object.assign(newCategory, { name, description });
    this.categories.push(newCategory);
  }
}

export { CategoriesRepositoryInMemory };
