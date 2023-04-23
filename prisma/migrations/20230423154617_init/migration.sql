-- CreateTable
CREATE TABLE "Entry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "patch" TEXT NOT NULL,
    "champion" TEXT NOT NULL,
    "camps" INTEGER NOT NULL,
    "smites" INTEGER NOT NULL,
    "path" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "player" TEXT NOT NULL
);
