import { DefaultSession, DefaultUser } from "next-auth";
export enum Role {
  JOB_SEEKER = "JOB_SEEKER",
  EMPLOYEE = "EMPLOYEE",
  ADMIN = "ADMIN",
  TESTER = "TESTER",
  NONE = "NONE",
}

interface IUser extends DefaultUser {
  /**
   * Role of user
   */
  role?: Role;

  /**
   * User displayName -- we should not edit the name 
   */
  displayName?: string;

  /**
   * Field to check whether a user is active
   */
  active?: boolean;

  /**
   * ProfileId, used in dashboard page
   */
  userProfileId?: number;

  /**
   * user country
   */
  country?: string;

  /**
   * user timezone
   */
  timezone?: string;
}

declare module "next-auth" {
  interface User extends IUser {}
  interface Session {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}
