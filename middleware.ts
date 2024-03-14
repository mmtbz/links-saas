export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/profile", "/dashboard", "/dashboard/tasks", "/dashboard/tasks/new", "/dashboard/tasks/edit/:id+"],
};
