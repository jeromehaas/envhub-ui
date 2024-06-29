/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "Secret" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
