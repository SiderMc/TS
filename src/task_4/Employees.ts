type BaseEmployee = { id: number, name: string }
type ManagerFields = {role:"manager", department: string, subordinates: number }
type  EngineerFields = {role:"engineer", stack: string[], level: 'junior' | 'senior' }
type Employee = (BaseEmployee & ManagerFields) | (BaseEmployee & EngineerFields)

export default Employee