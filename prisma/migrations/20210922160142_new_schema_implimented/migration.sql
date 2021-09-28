/*
  Warnings:

  - You are about to drop the column `quantity` on the `Trade` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nftId]` on the table `Trade` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `walledAddress` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trade" DROP COLUMN "quantity";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "walledAddress" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "NftArt" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "nftUuId" TEXT NOT NULL,

    CONSTRAINT "NftArt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NftArt_nftUuId_key" ON "NftArt"("nftUuId");

-- CreateIndex
CREATE UNIQUE INDEX "Trade_nftId_unique" ON "Trade"("nftId");

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_nftId_fkey" FOREIGN KEY ("nftId") REFERENCES "NftArt"("nftUuId") ON DELETE RESTRICT ON UPDATE CASCADE;
