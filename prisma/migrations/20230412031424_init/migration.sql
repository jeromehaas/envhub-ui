/*
  Warnings:

  - You are about to drop the column `createadAt` on the `Secret` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Secret" DROP COLUMN "createadAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
