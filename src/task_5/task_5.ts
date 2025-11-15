// Задача 5. Ролі користувачів і їхні дозволи. Опиши тип Roles = "admin" | "editor" | "viewer". Створи тип RolePermissions = Record<Roles, string[]>, де кожен ключ містить список дій, які дозволені ролі.

import permissions from "./permissions.js";

console.log("Admin permissions:", permissions.admin); 
console.log("Editor permissions:", permissions.editor); 
console.log("Viewer permissions:", permissions.viewer); 
