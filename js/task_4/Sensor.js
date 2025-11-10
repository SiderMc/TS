export default class Sensor {
    _isOn = true;
    // getValue(): number {
    // }
    turnOn() {
        this._isOn = true;
        console.log("✅ Sensor turned ON");
    }
    turnOff() {
        this._isOn = false;
        console.log("⚙️ Sensor turned OFF");
    }
}
;
//   getValue(): number {
// навіть якщо сенсор "вимкнений", базовий клас усе одно повертає значення
//     return Math.random() * 100;
//   }
// }
// class OfflineSensorBad extends SensorBad {
//   getValue(): number {
// ❌ Порушення LSP — поведінка змінюється: замість числа — помилка
//     throw new Error("Sensor offline! Cannot read value.");
//   }
// }
