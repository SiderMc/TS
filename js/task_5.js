"use strict";
// Задача 5. Дано набір налаштувань (ключ-значення(enabled/disabled)). Вивести ті, які є увімкненими
var UserSettings;
(function (UserSettings) {
    UserSettings["Music"] = "enable";
    UserSettings["Sound"] = "disable";
    UserSettings["Notifications"] = "enable";
    UserSettings["DarkMode"] = "enable";
    UserSettings["AutoUpdate"] = "disable";
    UserSettings["Location"] = "enable";
    UserSettings["VoiceControl"] = "disable";
})(UserSettings || (UserSettings = {}));
const getEnabledSettings = () => {
    const enableSettings = [];
    const settings = Object.entries(UserSettings);
    settings.forEach(([key, value]) => {
        if (value === 'enable')
            enableSettings.push(key);
    });
    return enableSettings;
};
const renderEnabledSettings = () => {
    const enableSettings = getEnabledSettings();
    document.write(`<p>Налаштування які підключені: <span>${enableSettings.join(', ')}</span></p>`);
};
renderEnabledSettings();
