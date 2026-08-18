import { registerDTO } from "./register.dto"
import { User } from "./user.entity"


export class userMapper{

  public static  toEntity(rawData:any){
        
    return User.create
        (            
         rawData.uuid,   
         rawData.username,
         rawData.email,
        )
    }

   public static toTable(domianEntity:User){
        
        return{

            uuid:domianEntity.UUId,
            document:domianEntity.Username,
            creditcard:domianEntity.Email,
            valeu:+domianEntity.password

        }
    }
}