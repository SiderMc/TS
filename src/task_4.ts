// Задача 4. Випадковим чином генерується масив номерів робочих днів, або назв вихідних, або назв святкових днів. Підрахувати чого було більше: святкових чи вихідних.

enum WeekendDay  {
    Saturday,
    Sunday,
  }
  
  enum HolidayName  {
    NewYear,
    Christmas,
    Easter,
    IndependenceDay,
  }
  
  const getRandomNum = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const generateRandomDays = (): void => {
    const days: string[] = [];
    let weekendCount: number = 0;
    let holidayCount: number = 0;
    let workdayCount: number = 0;
  
    const daysCount : number = getRandomNum(3, 15);
  
    for (let i = 0; i < daysCount ; i++) {
      const randomNumber: number = Math.floor(Math.random() * 11) + 1;
  
      if (randomNumber >= 1 && randomNumber <= 5) {
        days.push('Working day');
        workdayCount += 1;
      } else if (randomNumber === 6) {
        days.push(WeekendDay [WeekendDay .Saturday]);
        weekendCount += 1;
      } else if (randomNumber === 7) {
        days.push(WeekendDay [WeekendDay .Sunday]);
        weekendCount += 1;
      } else if (randomNumber === 8) {
        days.push(HolidayName [HolidayName .Christmas]);
        holidayCount += 1;
      } else if (randomNumber === 9) {
        days.push(HolidayName [HolidayName .NewYear]);
        holidayCount += 1;
      } else if (randomNumber === 10) {
        days.push(HolidayName [HolidayName .Easter]);
        holidayCount += 1;
      } else if (randomNumber === 11) {
        days.push(HolidayName [HolidayName .IndependenceDay]);
        holidayCount += 1;
      }
    }
  
    document.write(`<p>Random days: <span>${days.join(', ')}</span></p>`);
    document.write(`<p>Working days: <span>${workdayCount}</span></p>`);
    document.write(`<p>Weekend days: <span>${weekendCount}</span></p>`);
    document.write(`<p>Holidays: <span>${holidayCount}</span></p>`);
  };
  
  generateRandomDays();
  