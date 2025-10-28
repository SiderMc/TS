// Логування через статичний метод. Методи для info, warn, error.

import Logger from "./Logger.js";

Logger.info("Користувач увійшов у систему");  
Logger.warn("Невідомий користувач намагався отримати доступ"); 
Logger.error("Не вдалося завантажити дані з API"); 