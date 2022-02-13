import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/user";

export interface IUsersRepository {
  create(userData: ICreateUserDTO): Promise<void>
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
}
