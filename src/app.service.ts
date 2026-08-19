import { Injectable } from '@nestjs/common';
import { register } from './register.usecase';
import { registerDTO } from './register.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  
  constructor(
    private readonly registerUsecase: register.register,
    private readonly jwtService: JwtService
  ){}
  
 public async userRegister(data:registerDTO) {
      await this.registerUsecase.execute(data)
  }

  public async login(user: {email:string, password:string}) {
  

    
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
