import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  
  userRegister(data:any): string {

    console.log(data)
    return 'Hello World!,';
  }
}
