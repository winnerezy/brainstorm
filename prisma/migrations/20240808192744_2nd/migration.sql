/*
  Warnings:

  - You are about to drop the column `description` on the `Topic` table. All the data in the column will be lost.
  - You are about to drop the column `hashtags` on the `Topic` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Topic" DROP CONSTRAINT "Topic_hashtags_fkey";

-- AlterTable
ALTER TABLE "Topic" DROP COLUMN "description",
DROP COLUMN "hashtags";
