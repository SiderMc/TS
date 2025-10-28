// 1. Сервіс налаштувань користувача ⚙️
// Інтерфейс: IUserSettings – визначає структуру налаштувань, які потрібно зберігати (theme: 'dark' | 'light', language: string, notifications: boolean).
// Клас: SettingsService – містить метод loadSettings(): IUserSettings та saveSettings(settings: IUserSettings). Клас не є самими налаштуваннями, але оперує об'єктами цього типу.
import SettingsService from "./SettingsService.js";
const settings = new SettingsService();
document.body.insertAdjacentHTML("beforeend", settings.printSettings());
