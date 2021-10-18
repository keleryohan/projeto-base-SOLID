import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

//a única responsabilidade desta classe é criar o usuário. não salva-lo no banco, lidar com a requisição, ou qualquer outra coisa
export class CreateUserUseCase {
  private mailProvider: IMailProvider;
  private usersRepository: IUsersRepository;
  // ^ v utilizar o repositório ao invés do usersRepository permite alterar a implementação do repositório sem alterar nada aqui

  constructor(usersRepository: IUsersRepository, mailProvider: IMailProvider) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
  }

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Keler Yohan",
        email: "myEmail@hotmail.com",
      },
      subject: "Email de confirmação",
      body: " <p> Seu usuário foi criado com sucesso </p> ",
    });
  }
}
