export default class Logger {
    static printStatus(type, message) {
        const render = `<h5 ><span class="${type.toLowerCase()}">${type}</span> сповіщення</h5>
                        <p>${message}</p>`;
        return render;
    }
    static log(type, message) {
        document.body.insertAdjacentHTML('beforeend', this.printStatus(type, message));
    }
    static info(message) {
        this.log('INFO', message);
    }
    static warn(message) {
        this.log('WARN', message);
    }
    static error(message) {
        this.log('ERROR', message);
    }
}
