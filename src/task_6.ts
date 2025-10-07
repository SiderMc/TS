// Задача 6. Вводиться сума грошей і позначення валюти. Потрібно перевести у інші валюти ("USD" ,  "EUR" , "UAH"). Тобто якщо вводять гривні, то перевести у долари і євро. А якщо вводять долари, то перевести у гривні  і євро. Курси валют – це константи. 

let amountMoney: number = parseFloat(prompt('Введіть суму .') || '1');
let inputCurrency: string = prompt('Введіть валюту "USD,EUR,UAH"') || 'USD';

const usdToUah: number = 41;
const eurToUah: number = 44;

const currencyValue = inputCurrency.toUpperCase();

const templateRender = (values: object[]): void => {
  let template = `<h2>Курс валют</h2>
      <p>${currencyValue} : ${amountMoney}</p>`;

  values.forEach(currency => {
    const [key, value] = Object.entries(currency)[0];
    template += `<p>${currencyValue} = ${value.toFixed(2)} ${key.toUpperCase()}</p>`;
  });

  document.write(template);
};

if (!isNaN(amountMoney) && amountMoney > 0) {
  let values: object[] = [];
  switch (currencyValue) {
    case 'USD':
      values.push(
        { uah: usdToUah * amountMoney },
        { eur: (usdToUah * amountMoney) / eurToUah }
      );
      templateRender(values);
      break;
    case 'EUR':
        values.push(
            { uah: eurToUah * amountMoney },
            { usd: (eurToUah * amountMoney) / usdToUah }
          );
          templateRender(values);
      break;
    case 'UAH':
        values.push(
            { eur: amountMoney / eurToUah},
            { usd: amountMoney / usdToUah}
          );
          templateRender(values);
      break;
    default:
      document.write('<h3>Валюти не знайдено</h3>');
  }
} else {
  document.write('<h3>Введена вами сума не коректна</h3>');
}
