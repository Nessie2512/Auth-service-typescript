import { loginDTO } from "./login.dto";

export abstract class IUserRepository{
    abstract register(data:any):Promise<void> 
    abstract login(data:loginDTO):Promise<any>
}