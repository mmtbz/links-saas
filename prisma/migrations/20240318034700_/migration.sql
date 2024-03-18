/*
  Warnings:

  - The values [EMPLOYEE] on the enum `User_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('JOB_SEEKER', 'EMPLOYEER', 'ADMIN', 'TESTER', 'NONE') NOT NULL DEFAULT 'NONE';
