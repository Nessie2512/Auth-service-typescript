import { IUserRepository } from "./IUser.repository";

export namespace login{
    export class login{

        constructor(private readonly IUserRepo: IUserRepository){}

        public async execute(user:){

        }
    }
}