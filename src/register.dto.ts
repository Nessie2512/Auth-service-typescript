import { IsString, IsEmail, MinLength} from 'class-validator'; 

export class registerDTO{

    @IsString()
    username:string;
    
    @IsEmail({}, { message: 'Email inválido' })
    email: string;

    @MinLength(6)
    password: string;
} 