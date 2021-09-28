-- CreateTable
CREATE TABLE "Social" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "dappid" INTEGER NOT NULL,

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Social_dappid_unique" ON "Social"("dappid");

-- AddForeignKey
ALTER TABLE "Social" ADD CONSTRAINT "Social_dappid_fkey" FOREIGN KEY ("dappid") REFERENCES "Dapps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
