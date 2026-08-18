import { Injectable } from "@nestjs/common";
import { IUserRepository } from "./user.repository";
import { PrismaService } from "./prisma/prisma.service";
import { User } from "./user.entity";
import { userMapper } from "./user.mapper";

@Injectable()
export class prismaRepository implements IUserRepository{

    constructor(private readonly prismaClient: PrismaService){}

    public async register(newUser: User): Promise<void> {
        
        const userMapped = userMapper.toTable(newUser);

        await this.prismaClient.user.create(
            {
                data:{
                    uuid:userMapped.uuid,
                    username: userMapped.username,
                    email: userMapped.email,
                    password:userMapped.password
                }
            }
        )

        
    }
} 