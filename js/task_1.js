"use strict";
// Задача 1. Створити два інтерфейс студента (піб, курс, факультет). На основі цього інтерфейсу створити інтерфейс старости (додати поле з номером групи)
const headStudent = {
    fullName: 'John Smith',
    course: 2,
    faculty: 'Computer Science',
    groupNumber: 'CS-21',
};
document.write(`<p>Староста групи : ${headStudent.fullName}</p>
   <p>Курс : ${headStudent.course}</p>
   <p>Факультет : ${headStudent.faculty}</p>
   <p>Номер групи  : ${headStudent.groupNumber}</p>
  `);
