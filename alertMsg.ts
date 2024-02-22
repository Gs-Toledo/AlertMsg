import './styles/styles.css';

class FixedAlert {
    private message: string;
    private alertType: string;
    private container: HTMLElement;
    private alertDiv?: HTMLDivElement;

    constructor(message: string, alertType: string, container: HTMLElement = document.body) {

        this.message = message;
        this.alertType = alertType;
        this.container = container;
        this.createAlert();
        this.autoRemove();

    }

    private createAlert(): void {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${this.alertType} fixed-top-alert fade show`;
        alertDiv.textContent = this.message;

        alertDiv.addEventListener('transitionend', () => {
            if (!alertDiv.classList.contains('show')) {
                this.container.removeChild(alertDiv);
            }
        });

        this.container.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.classList.remove('show');
        }, 3000);

        this.alertDiv = alertDiv;

    }

    private autoRemove(): void {
        setTimeout(() => {
            this.removeAlert();
        }, 4000);
    }

    private removeAlert(): void {
        if (this.alertDiv) {
            this.alertDiv.classList.add('show');
        }
    }
}

export default FixedAlert;
