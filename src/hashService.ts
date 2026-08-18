
export abstract class hashService{
    abstract hash(password:string):Promise<void>
    abstract compare(password:string,hash:string):Promise<boolean>
}