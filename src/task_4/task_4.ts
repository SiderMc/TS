// 6. Моделювання співробітників з різними ролями 👨‍💼
// Клас: CompanyDirectory
// Складний тип: Визначення типу Employee.
// BaseEmployee = { id: number, name: string }
// ManagerFields = { department: string, subordinates: number }
// EngineerFields = { stack: string[], level: 'junior' | 'senior' } (Об'єднання для рівня)
// Об'єднання та Перетин: Employee = (BaseEmployee & ManagerFields) | (BaseEmployee & EngineerFields) (Співробітник має або менеджерські, або інженерні поля)
// Метод: getEmployeeDetails(employee: Employee)

import CompanyDirectory from "./CompanyDirectory.js";
import Employee from "./Employees.js";


const companyDirectory = new CompanyDirectory()

const employee:Employee = {
    id: 7,
    name: "Emily Johnson",
    role: "engineer",
    stack: ["JavaScript", "React", "Node.js"],
    level: "senior",
  } 

companyDirectory.getEmployeeDetails(employee)