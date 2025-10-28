type Theme = 'dark' | 'light';

export default interface IUserSettings {
  theme: Theme;
  language: string;
  notifications: boolean;
}
