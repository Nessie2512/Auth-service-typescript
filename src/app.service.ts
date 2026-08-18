import { Injectable } from '@nestjs/common';
import { register } from './register.usecase';
import { registerDTO } from './register.dto';

@Injectable()
export class AppService {
  
  constructor(private readonly registerUsecase: register.register){}
  
 public async userRegister(data:registerDTO) {
      await this.registerUsecase.execute(data)
  }
}
