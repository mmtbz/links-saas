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
   * Field to check whether a user is active
   */
  active?: boolean;

  /**
   * ProfileId, used in dashboard page
   */
  userProfileId?: number | null;
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
