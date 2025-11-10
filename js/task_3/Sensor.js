export default class Sensor {
    _isOn = true;
    turnOn() {
        this._isOn = true;
        console.log('✅ Sensor turned ON');
    }
    turnOff() {
        this._isOn = false;
        console.log('⚙️ Sensor turned OFF');
    }
    getValue() {
        return this._isOn ? Math.random() * 100 : 0;
    }
}
