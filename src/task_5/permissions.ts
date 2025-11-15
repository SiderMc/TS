import RolePermissions from "./Types.js";

 const permissions: RolePermissions = {
    admin: ["create", "read", "update", "delete", "publish", "archive"],
    editor: ["read", "update", "publish", "archive"],
    viewer: ["read", "comment", "share"]
};
export default permissions