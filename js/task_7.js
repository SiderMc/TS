"use strict";
// Задача 7. Описати тип «журнал учня» (3 поля-масиви з оцінками ). Потім на основі цього типу створити тип «менеджер оцінок» (додати методи знаходження середньої оцінки і найбільшої оцінки)
const studentGrade = {
    math: [],
    english: [],
    literature: [],
    addGrades(subject, grades) {
        this[subject].push(...grades);
    },
    getAverage(subject) {
        const grades = this[subject];
        if (grades.length === 0)
            return null;
        const sum = grades.reduce((acc, item) => acc + item, 0);
        return sum / grades.length;
    },
    getMax(subject) {
        const grades = this[subject];
        if (grades.length === 0)
            return null;
        return Math.max(...grades);
    },
};
studentGrade.addGrades("math", [5, 9, 8, 11, 10]);
studentGrade.addGrades("english", [7, 12, 10, 9]);
studentGrade.addGrades("literature", [7, 10, 4, 10, 9]);
const renderJournal = () => {
    document.write(`<p>Cередній бал з математики : ${studentGrade.getAverage("math")}</p>
    <p>Найвищий  бал з математики : ${studentGrade.getMax("math")}</p>
    <p>Cередній бал з англійської : ${studentGrade.getAverage("english")}</p>
    <p>Найвищий  бал з англійської : ${studentGrade.getMax("english")}</p>
      <p>Cередній бал з літератури : ${studentGrade.getAverage("literature")}</p>
    <p>Найвищий  бал з літератури : ${studentGrade.getMax("literature")}</p>
    `);
};
renderJournal();
