-- CreateTable
CREATE TABLE "Secret" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "Secret_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Secret" ADD CONSTRAINT "Secret_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
