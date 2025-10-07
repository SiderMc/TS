// Задача 4. Вводиться номер дня або назва дня. Створити функцію, яка за цим значенням виводить на екран чи це робочий день.

type WeeklyTypes = {
  workingDays: string[];
  weekend: string[];
};

let day: string = prompt('Enter a day name or a number (1–7):') || 'unknown';

const weekly: WeeklyTypes = {
  workingDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
  weekend: ['saturday', 'sunday'],
};

const findDay = (): void => {
  const numberDay: number = parseInt(day);
  if (!isNaN(numberDay)) {
    if (numberDay >= 1 && numberDay <= 5) {
      document.write('<p>Its a working day</p>');
    } else if (numberDay === 6 || numberDay === 7) {
      document.write('<p>Its a weekend</p>');
    } else {
      document.write('<p>Invalid day number</p>');
    }
    return;
  }

  if (weekly.workingDays.includes(day.toLowerCase())) {
    document.write('<p>Its a working day</p>');
  } else if (weekly.weekend.includes(day.toLowerCase())) {
    document.write('<p>Its a weekend</p>');
  } else {
    document.write('<p>Unknown day name</p>');
  }
};

findDay();
