import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase //outra forma de definir e assign variável no construtor. outra forma mais simples seria como no CreateUserUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    //console.log(name, email, password);

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        password,
      });
      return response.status(201).send();
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  }
}
