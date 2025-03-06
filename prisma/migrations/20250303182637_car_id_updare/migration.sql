/*
  Warnings:

  - A unique constraint covering the columns `[id,userId]` on the table `Car` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Car_id_userId_key" ON "Car"("id", "userId");
