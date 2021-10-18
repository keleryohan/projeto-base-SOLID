import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgressUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

//este arquivo tem como objetivo instanciar os elementos com suas respectivas implementações
//obs: o nome ser index nesse caso é bom para que a importação seja apenas '/useCases/CreateUser'

const mailtrapProvider = new MailtrapMailProvider();
const postgressUsersRepository = new PostgressUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  postgressUsersRepository,
  mailtrapProvider
);

const createUserController = new CreateUserController(createUserUseCase);

//o controller sendo usado na routes, o useCase está sendo usado no controller
export { createUserUseCase, createUserController };
