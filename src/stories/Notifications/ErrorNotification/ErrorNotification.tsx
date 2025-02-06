import styles from './ErrorNotification.module.scss';
import info from './../../../assets/infoIcon.png'
import cross from './../../../assets/cross.png'
import './../../../index.css';

type ErrorNotificationProps = {
    message?: string;
};

const ErrorNotification = (props: ErrorNotificationProps) => {
    const { message } = props;

    return (
        <div
            className={`
            ${styles.notification}
            `}
        >
            <div>
                <img src={info} />
                <h1><span>Error Message: </span>{message}</h1>
            </div>

            <img src={cross} />
        </div>
    );
};

export default ErrorNotification;
