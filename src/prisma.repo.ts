import { Injectable } from "@nestjs/common";
import { IUserRepository } from "./user.repository";
import { PrismaService } from "./prisma/prisma.service";

@Injectable()
export class prismaRepository implements IUserRepository{

    constructor(private readonly prismaClient: PrismaService){}

    public async register(data: any): Promise<void> {
        
        await this.register
    }
} 