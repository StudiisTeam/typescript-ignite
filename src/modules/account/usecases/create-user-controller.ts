import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./create-user-usecase";

export class CreateUserUseController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body

      const createUserUseCase = container.resolve(CreateUserUseCase)
      await createUserUseCase.create(data)

      return response.status(201).send()
    } catch (err) {
      return response.status(400).send()
    }
  }
}