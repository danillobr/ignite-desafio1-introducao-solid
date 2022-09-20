import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User | undefined {
    const userAlrealdyExists = this.usersRepository.findByEmail(email);

    if (userAlrealdyExists) {
      throw new Error("User already existis!");
    }

    this.usersRepository.create({ name, email });

    return userAlrealdyExists;
  }
}

export { CreateUserUseCase };
