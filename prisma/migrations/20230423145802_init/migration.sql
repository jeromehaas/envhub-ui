-- AlterTable
ALTER TABLE "Secret" ADD COLUMN     "environment" TEXT NOT NULL DEFAULT 'production',
ADD COLUMN     "layer" TEXT NOT NULL DEFAULT 'backend';
