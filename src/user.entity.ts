
import { entity } from "./entity";

type userType ={
    username:string
    email:string
    password:string
}

export class User extends entity<userType>{

    private constructor(userdata:userType, id?:string){
        super(userdata,id)
    }

    public static create(username:string, email:string,password:string,id?:string){

      console.log(username,email,password)

        if (
             this.isEmail(email) === true 
             && this.isUsername(username).valido === true 
             && this.isPassword(password).valida === true
            )
            {
                return new User({username,email,password},id)
            }

            throw new Error("not valid data")
        
    }


    public get Email(){
        return this.props.email;
    }


    
    public get Username(){
        return this.props.username;
    }

    public get password(){
      return this.props.password
    }


    public static isEmail(email:string){  
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }


    public static isPassword(password:string){
         const erros: string[] = [];

  
  if (password.length < 8) {
    erros.push('Deve ter pelo menos 8 caracteres.');
    console.log("password.length < 8")
  }

  
  if (!/[A-Z]/.test(password)) {
    erros.push('Deve conter pelo menos uma letra maiúscula.');
    console.log("!/[A-Z]/.test(password)")
  }

  
  if (!/[a-z]/.test(password)) {
    erros.push('Deve conter pelo menos uma letra minúscula.');
    console.log("!/[a-z]/")
  }

  
  if (!/[0-9]/.test(password)) {
    erros.push('Deve conter pelo menos um número.');
    console.log("!/[0-9]/")
  }

  
  if (!/[^A-Za-z0-9]/.test(password)) {
    erros.push('Deve conter pelo menos um caráter especial (ex: @, #, $, !).');
    console.log("!/[^A-Za-z0-9]/")
  }

  return {
    valida: erros.length === 0,
    erros,
  };
    
   }



   public static isUsername(username:string){
          
  const cleanUsername = username.trim();

  if (cleanUsername.length < 3 || cleanUsername.length > 20) {
    return {
      valido: false,
      erro: 'O username deve ter entre 3 e 20 caracteres.',
    };
  }

  const validRegex = /^[a-zA-Z0-9_-]+$/;
  
  if (!validRegex.test(cleanUsername)) {
    return {
      valido: false,
      erro: 'O username apenas pode conter letras, números, hifenes (-) e underscores (_).',
    };
  }

  return { valido: true };
        
   }

}