import type Employee from "./Employees.js";

export default class CompanyDirectory {
    constructor(){}
    public getEmployeeDetails(employee: Employee){
        if(employee.role ==="engineer")  this.printEmployee(employee.name,employee.level, employee.stack) 
        else return this.printEmployee(employee.name,employee.department, employee.subordinates )
    }
    private printEmployee(name: string, valOne: string, valTwo: string[] | number): string {
        const render = `
            <p><strong>Ім'я співробітника:</strong> ${name}</p>
            <p><strong>Позиція / Відділ:</strong> ${valOne}</p>
            <p><strong>${Array.isArray(valTwo) ? "Технологічний стек" : "Підлеглих"}:</strong> ${Array.isArray(valTwo) ? valTwo.join(", ") : valTwo}</p>
        `;
        document.body.insertAdjacentHTML("beforeend", render);
        return render;
      }
      
};
