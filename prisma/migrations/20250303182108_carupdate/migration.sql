/*
  Warnings:

  - Added the required column `updatedAt` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `price` on the `Car` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT,
DROP COLUMN "price",
ADD COLUMN     "price" INTEGER NOT NULL;
