import { IsString, IsEmail, MinLength} from 'class-validator'; 

export class registerDTO{   
    @IsEmail({}, { message: 'Email inválido' })
    email: string;

    @MinLength(6)
    password: string;
} 