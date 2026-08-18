import { Injectable } from "@nestjs/common";
import { hashService } from "./hashService";
import * as bcrypt from 'bcrypt';



@Injectable()
export class bycryptHashingService implements hashService{

    private readonly hashingSalt = 12;
 
    public async hash(password: string): Promise<string> {
        return await bcrypt.hash(password,this.hashingSalt)

    }

    public async compare(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password,hash)
    }
}