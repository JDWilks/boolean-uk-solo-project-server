/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Dapps" (
    "id" SERIAL NOT NULL,
    "dappslug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "full_description" TEXT NOT NULL,
    "website_url" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "number_of_nfts" INTEGER NOT NULL,

    CONSTRAINT "Dapps_pkey" PRIMARY KEY ("id")
);
