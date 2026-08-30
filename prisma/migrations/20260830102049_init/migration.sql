/*
  Warnings:

  - Changed the type of `startDate` on the `educations` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `endDate` to the `educations` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `startDate` on the `experiences` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `endDate` to the `experiences` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `educations` DROP COLUMN `startDate`,
    ADD COLUMN `startDate` INTEGER NOT NULL,
    DROP COLUMN `endDate`,
    ADD COLUMN `endDate` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `experiences` DROP COLUMN `startDate`,
    ADD COLUMN `startDate` INTEGER NOT NULL,
    DROP COLUMN `endDate`,
    ADD COLUMN `endDate` INTEGER NOT NULL;
