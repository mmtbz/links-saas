-- AlterTable
ALTER TABLE `User` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `role` ENUM('JOB_SEEKER', 'EMPLOYEE', 'ADMIN', 'TESTER', 'NONE') NOT NULL DEFAULT 'NONE';
