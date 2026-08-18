-- CreateTable
CREATE TABLE "statement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "statement_uuid_key" ON "statement"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "statement_email_key" ON "statement"("email");
