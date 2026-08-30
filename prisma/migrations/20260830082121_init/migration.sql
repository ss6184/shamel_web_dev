-- AlterTable
ALTER TABLE `educations` ADD COLUMN `certificate` VARCHAR(191) NULL,
    ADD COLUMN `university` VARCHAR(191) NULL,
    ADD COLUMN `year` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `introduction` VARCHAR(191) NULL;
