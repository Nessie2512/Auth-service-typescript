# 1. Empurra a tabela "User" para a memória partilhada do SQLite
npx prisma db push

# 2. Reconstrói o Prisma Client com a nova estrutura v7
npx prisma migrate dev --name init
npx prisma generate


install
# 1. Instalar o Prisma CLI como dependência de desenvolvimento
npm install prisma --save-dev

# 2. Instalar o Cliente do Prisma para produção
npm install @prisma/client

# 3. Instalar o driver do SQLite recomendado pelo Prisma
npm install @prisma/adapter-better-sqlite3 better-sqlite3

# 4. Instalar as tipagens de desenvolvimento para o SQLite
npm install @types/better-sqlite3 --save-dev