import { Injectable } from '@nestjs/common';
import { register } from './register.usecase';
import { registerDTO } from './register.dto';
import { JwtService } from '@nestjs/jwt';
import { loginDTO } from './login.dto';
import { login } from './login.usecase';

@Injectable()
export class AppService {
  
  constructor(
    private readonly registerUsecase: register.register,
    private readonly  userLogin: login.login,
    private readonly jwtService: JwtService
  ){}
  
 public async userRegister(data:registerDTO) {
      await this.registerUsecase.execute(data)
  }

  public async login(user: loginDTO) {
  
    await this.userLogin.execute(user)

    // return {
    //   access_token: this.jwtService.sign(user),
    // };
  }
}
