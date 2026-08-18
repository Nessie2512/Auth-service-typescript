import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import Database from 'better-sqlite3';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // No Prisma 7, passas um objeto com a URL diretamente para o adaptador.
    // Ele vai criar a base de dados em memória partilhada de forma automática por trás.
    const adapter = new PrismaBetterSqlite3({
      url: process.env.DATABASE_URL || 'file:./dev.db',
    });

    // Injeta o adaptador configurado no motor do Prisma Client
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
