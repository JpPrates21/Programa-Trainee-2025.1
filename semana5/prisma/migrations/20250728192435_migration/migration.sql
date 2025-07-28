-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Chefe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gerenteGeral" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
