import { ISensor } from './Interfaces.js';

export default class Sensor implements ISensor {
  private _isOn: boolean = true;
  public turnOn(): void {
    this._isOn = true;
    console.log('✅ Sensor turned ON');
  }
  public turnOff(): void {
    this._isOn = false;
    console.log('⚙️ Sensor turned OFF');
  }
  getValue(): number {
    return this._isOn ? Math.random() * 100 : 0;
  }
}
