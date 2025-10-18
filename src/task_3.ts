// Задача 3. Задача “Події календаря”. Події можуть бути Meeting (має participants), Deadline (має dueDate), Reminder (має note). Кожна подія може бути mandatory або optional. Створити тип CalendarEvent, який об’єднує тип події та її важливість, використовуючи перетини та об’єднання типів.

type Meeting = {
  type: 'Meeting';
  participants: string[];
};

type Deadline = {
  type: 'Deadline';
  dueDate: string;
};

type Reminder = {
  type: 'Reminder';
  note: string;
};

type Importance = {
  importance: 'mandatory' | 'optional';
};

type CalendarEvent = (Meeting | Deadline | Reminder) & Importance;

const renderEventInfo = (
  event: string,
  info: string | string[],
  importance: string
): void => {
  document.write(`<p> Подія : ${event}</p> ${info}
    <p>Важливість : ${importance}</p>
    `);
};

const getEventInfo = (eventType: CalendarEvent): void => {
  switch (eventType.type) {
    case 'Meeting':
      renderEventInfo(eventType.type,`<p>Учасники : ${eventType.participants}</p>`,eventType.importance)
      break;
    case 'Deadline':
        renderEventInfo(eventType.type,`<p>Кінцевий термін : ${eventType.dueDate}</p>`,eventType.importance)
      break;
      case "Reminder":
        renderEventInfo(eventType.type,`<p>Нагадування термін : ${eventType.note}</p>`,eventType.importance)
      break;
      default:
        const _exhaustiveCheck: never = eventType;
        throw new Error('Невідомий тип події');
  }
  }
  getEventInfo({
    type: 'Meeting',
    participants: ['Alice', 'Bob', 'Charlie'],
    importance: 'mandatory',
  })

