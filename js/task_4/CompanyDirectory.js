export default class CompanyDirectory {
    constructor() { }
    getEmployeeDetails(employee) {
        if (employee.role === "engineer")
            this.printEmployee(employee.name, employee.level, employee.stack);
        else
            return this.printEmployee(employee.name, employee.department, employee.subordinates);
    }
    printEmployee(name, valOne, valTwo) {
        const render = `
            <p><strong>Ім'я співробітника:</strong> ${name}</p>
            <p><strong>Позиція / Відділ:</strong> ${valOne}</p>
            <p><strong>${Array.isArray(valTwo) ? "Технологічний стек" : "Підлеглих"}:</strong> ${Array.isArray(valTwo) ? valTwo.join(", ") : valTwo}</p>
        `;
        document.body.insertAdjacentHTML("beforeend", render);
        return render;
    }
}
;
