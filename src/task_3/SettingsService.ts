import IUserSettings from './IUserSettings.js';

export default class SettingsService {
  private settings: IUserSettings;
  private defaultSettings: IUserSettings;
  constructor() {
    this.defaultSettings = {
      theme: 'light',
      language: 'uk',
      notifications: true,
    };
    this.settings = { ...this.defaultSettings };
  }
  public loadSettings(): IUserSettings {
    return this.settings;
  }
  public saveSettings(settings: IUserSettings): void {
    this.settings = settings;
  }
  public printSettings():string{
    const {theme,language,notifications}=this.settings
    const render = `
    <h2>Налаштування користувача</h2>
    <p><strong>Тема інтерфейсу :</strong> ${theme}</p>
    <p><strong>Мова:</strong> ${language}</p>
    <p><strong>Сповіщення:</strong> ${notifications?"on":"off"}</p>
  `;
  return render;
  }
}
