// Задача 5. Дано набір налаштувань (ключ-значення(enabled/disabled)). Вивести ті, які є увімкненими

enum UserSettings {
  Music = 'enable',
  Sound = 'disable',
  Notifications = 'enable',
  DarkMode = 'enable',
  AutoUpdate = 'disable',
  Location = 'enable',
  VoiceControl = 'disable',
}

const getEnabledSettings = ():string[] => {
  const enableSettings: string[] = [];
  const settings = Object.entries(UserSettings);
  settings.forEach(([key, value]) => {
    if (value === 'enable') enableSettings.push(key);
  });
return enableSettings
};

const renderEnabledSettings = ():void=>{
    const enableSettings = getEnabledSettings()
    document.write(`<p>Налаштування які підключені: <span>${enableSettings.join(', ')}</span></p>`);
}


renderEnabledSettings()