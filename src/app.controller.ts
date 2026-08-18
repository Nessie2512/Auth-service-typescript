import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { registerDTO } from './register.dto';

@Controller("user")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/register")
  public async register(@Body() payload:registerDTO) {
    await this.appService.userRegister(payload);
  }




}
