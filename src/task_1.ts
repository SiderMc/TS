// Задача 1. Створити два інтерфейс студента (піб, курс, факультет). На основі цього інтерфейсу створити інтерфейс старости (додати поле з номером групи)

interface IStudent {
  fullName: string;
  course: number;
  faculty: string;
}
interface IHeadStudent extends IStudent {
  groupNumber: string;
}

const headStudent: IHeadStudent = {
  fullName: 'John Smith',
  course: 2,
  faculty: 'Computer Science',
  groupNumber: 'CS-21',
};

document.write(
  `<p>Староста групи : ${headStudent.fullName}</p>
   <p>Курс : ${headStudent.course}</p>
   <p>Факультет : ${headStudent.faculty}</p>
   <p>Номер групи  : ${headStudent.groupNumber}</p>
  `
);
