import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { register } from './register.usecase';
import { IUserRepository } from './IUser.repository';
import { prismaRepository } from './prisma.repo';
import { hashService } from './hashService';
import { bycryptHashingService } from './bycryptHashing.service';
import { login } from './login.usecase';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: 
  [
    register.register,login.login,AppService,JwtService,
    
    {
      provide: IUserRepository,
      useClass:prismaRepository
    },

    {
      provide: hashService,
      useClass: bycryptHashingService
    }

  ],
})
export class AppModule {}
