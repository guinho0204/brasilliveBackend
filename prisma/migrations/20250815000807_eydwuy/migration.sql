/*
  Warnings:

  - Added the required column `AppId` to the `ConfigLive` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ConfigLive` ADD COLUMN `AppId` VARCHAR(191) NOT NULL;
