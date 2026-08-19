import { IUserRepository } from "./IUser.repository";
import { loginDTO } from "./login.dto";

export namespace login{
    export class login{

        constructor(private readonly IUserRepo: IUserRepository){}

        public async execute(user:loginDTO){

            const isUserFound = await this.IUserRepo.login(user);

            return isUserFound;
        }
    }
}