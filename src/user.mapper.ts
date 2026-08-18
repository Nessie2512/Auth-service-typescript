import { registerDTO } from "./register.dto"
import { User } from "./user.entity"


export class userMapper{

  public static  toEntity(rawData:User){
        
    return User.create
        (            
         rawData.UUId,   
         rawData.Username,
         rawData.Email,
         rawData.password,
        )
    }

   public static toTable(domianEntity:User){
        
        return{

            uuid:domianEntity.UUId,
            username:domianEntity.Username,
            email:domianEntity.Email,
            password:domianEntity.password

        }
    }
}