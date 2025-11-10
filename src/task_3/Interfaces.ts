export interface ISensor {
  turnOn(): void;
  turnOff(): void;
  getValue(): number;
}
