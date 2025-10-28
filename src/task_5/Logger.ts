type LoggerStatus = 'INFO' | 'WARN' | 'ERROR';

export default class Logger {
  private static printStatus(type: LoggerStatus, message: string): string {
    const render = `<h5 ><span class="${type.toLowerCase()}">${type}</span> сповіщення</h5>
                        <p>${message}</p>`;
    return render;
  }
  private static log(type: LoggerStatus, message: string): void {
    document.body.insertAdjacentHTML(
      'beforeend',
      this.printStatus(type, message)
    );
  }

  static info(message: string): void {
    this.log('INFO', message);
  }

  static warn(message: string): void {
    this.log('WARN', message);
  }

  static error(message: string): void {
    this.log('ERROR', message);
  }
}
