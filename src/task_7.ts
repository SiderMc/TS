// Задача 7. Згенерувати масив нагород (золота, срібна, бронзова медалі та грамота). Підрахувати кількість кожної з нагород. Використати enum. Можете і never якось застосувати

enum Rewards {
  Gold = 'Золота медаль',
  Silver = 'Срібна медаль',
  Bronze = 'Бронзова медаль',
  Certificate = 'Грамота',
}

const rewardError   = (message: string): never => {
  throw new Error(message);
};

const getRandomNumber = (min: number, max: number): number|never => {
  if (typeof min !== 'number' || typeof max !== 'number')
    rewardError  ('Невірний тип');
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRewards = (): void => {
  const allRewards: string[] = [];
  let goldMedalsCount: number = 0;
  let silverMedalsCount: number = 0;
  let bronzeMedalsCount: number = 0;
  let certificateCount: number = 0;

  const value: number = getRandomNumber(5, 15);

  for (let i: number = 0; i < value; i++) {
    const randomNumber: number = Math.floor(Math.random() * 4) + 1;

    switch (randomNumber) {
      case 1:
        allRewards.push(Rewards.Gold);
        goldMedalsCount += 1;
        break;
      case 2:
        allRewards.push(Rewards.Silver);
        silverMedalsCount += 1;
        break;
      case 3:
        allRewards.push(Rewards.Bronze);
        bronzeMedalsCount += 1;
        break;
      case 4:
        allRewards.push(Rewards.Certificate);
        certificateCount += 1;
        break;
        default: rewardError  ("Інших нагород не знайдено !")
    }
  }
  document.write(`<p>All rewards: <span>${allRewards.join(', ')}</span></p>`);
  document.write(`<p>Золотих медалей: <span>${goldMedalsCount}</span></p>`);
  document.write(`<p>Срібних медалей: <span>${silverMedalsCount}</span></p>`);
  document.write(`<p>Бронзових: <span>${bronzeMedalsCount}</span></p>`);
  document.write(`<p>Грамот: <span>${certificateCount}</span></p>`);
};

generateRewards();
