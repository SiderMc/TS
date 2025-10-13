// Задача 1. Вводиться перший номер  місяця якоїсь пори року (3,6,9,12). Визначити пору року. Передбачити перевірку і генерувати помилку якщо некоректний місяць (1-12) і генерувати помилку якщо це не перший місяць пори року. Використати never.

enum  Season {
    Spring = "Весна",
    Summer = "Літо",
    Autumn = "Осінь",
    Winter = "Зима"
}


const monthInput:number = Number(prompt("Ввести перший місяць пори року (3/6/9/12)"))|| 3

const seasonError = (message:string):never=>{
    throw new Error(message)
}

const getSeason =(month:number):void=>{
    if (month < 1 || month > 12) seasonError("Некоректний номер місяця! Має бути від 1 до 12.");
    switch (month) {
        case 3:
          document.write(`<p>${Season.Spring}</p>`)
          break
        case 6:
          document.write(`<p>${Season.Summer}</p>`)
            break
        case 9:
            document.write(`<p>${Season.Autumn}</p>`)
            break
        case 12:
            document.write(`<p>${Season.Winter}</p>`)
          break 
        default:
          seasonError("Це не перший місяць жодної пори року!");
      }
}
getSeason(monthInput)