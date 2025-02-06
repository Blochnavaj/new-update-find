import styles from './SuccessNotification.module.scss';
import info from './../../../assets/infoIcon.png'
import cross from './../../../assets/cross.png'
import './../../../index.css';

type SuccessNotificationProps = {
    message?: string;
};

const SuccessNotification = (props: SuccessNotificationProps) => {
    const { message } = props;

    return (
        <div
            className={`
            ${styles.notification}
            `}
        >
            <div>
                <img src={info} />
                <h1><span>Success Message: </span>{message}</h1>
            </div>

            <img src={cross} />
        </div>
    );
};

export default SuccessNotification;
