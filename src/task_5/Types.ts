type Roles = "admin" | "editor" | "viewer";

 type RolePermissions = Record<Roles, string[]>;

 export default RolePermissions