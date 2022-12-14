import { User } from "@/entities/user";
import { UserRepository } from "@/repositories/user.repository";

export class FindAllUsersService {
  constructor(private readonly _userRepository: UserRepository) {}

  async execute(): Promise<Array<Omit<User, "password">>> {
    const data = await this._userRepository.findAll();

    return data;
  }
}
