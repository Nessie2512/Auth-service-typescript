import { Injectable } from '@nestjs/common';
import { register } from './register.usecase';
import { registerDTO } from './register.dto';

@Injectable()
export class UsersService {

    constructor(private readonly register: register.register){}
     
    public async userRegister(data:registerDTO) {
          await this.register.execute(data)
    }

    // public async login(data:{email:string, password:string}){
        
    // }
}
