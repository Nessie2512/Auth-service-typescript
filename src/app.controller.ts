import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { registerDTO } from './register.dto';

@Controller("user")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/register")
  register(@Body() payload:registerDTO): string {
    return this.appService.userRegister(payload);
  }




}
