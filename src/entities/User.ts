import { v4 } from "uuid";

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  //obs: id como opcional para evitar criar usuário já existente
  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);
    //^ mesma coisa que:
    //this.name = props.name
    //this.email....

    //definindo id de forma independente ao BD
    if (!id) {
      this.id = v4();
    }
  }
}
