export default class SettingsService {
    settings;
    defaultSettings;
    constructor() {
        this.defaultSettings = {
            theme: 'light',
            language: 'uk',
            notifications: true,
        };
        this.settings = { ...this.defaultSettings };
    }
    loadSettings() {
        return this.settings;
    }
    saveSettings(settings) {
        this.settings = settings;
    }
    printSettings() {
        const { theme, language, notifications } = this.settings;
        const render = `
    <h2>Налаштування користувача</h2>
    <p><strong>Тема інтерфейсу :</strong> ${theme}</p>
    <p><strong>Мова:</strong> ${language}</p>
    <p><strong>Сповіщення:</strong> ${notifications ? "on" : "off"}</p>
  `;
        return render;
    }
}
