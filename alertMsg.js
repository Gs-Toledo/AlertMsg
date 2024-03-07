import './styles/styles.css';
class FixedAlert {
    message;
    alertType;
    container;
    alertDiv;
    constructor(message, alertType, container = document.body) {
        this.message = message;
        this.alertType = alertType;
        this.container = container;
        this.createAlert();
        this.autoRemove();
    }
    createAlert() {
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
    autoRemove() {
        setTimeout(() => {
            this.removeAlert();
        }, 4000);
    }
    removeAlert() {
        if (this.alertDiv) {
            this.alertDiv.classList.add('show');
        }
    }
}
export default FixedAlert;
