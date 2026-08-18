import { registerDTO } from "./register.dto";
import { IUserRepository } from "./user.repository";


export namespace register{
    
    export class register{

        constructor(private readonly IuserRepo: IUserRepository){}

        public async execute(data:registerDTO){
            
            await this.IuserRepo.register()
        }
    }
}