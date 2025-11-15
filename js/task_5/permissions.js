const permissions = {
    admin: ["create", "read", "update", "delete", "publish", "archive"],
    editor: ["read", "update", "publish", "archive"],
    viewer: ["read", "comment", "share"]
};
export default permissions;
