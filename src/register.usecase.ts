import { Injectable } from "@nestjs/common";
import { registerDTO } from "./register.dto";
import { User } from "./user.entity";
import { IUserRepository } from "./IUser.repository";

export namespace register{
    
    @Injectable()
    export class register{

        constructor(
            private readonly IuserRepo: IUserRepository
        ){}

        public async execute(data:registerDTO){
            const newUser =  User.create(data.username,data.email, data.password)
            await this.IuserRepo.register(newUser)
        }
    }
}