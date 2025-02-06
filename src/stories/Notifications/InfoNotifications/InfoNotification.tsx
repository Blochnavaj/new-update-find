import styles from './InfoNotification.module.scss';
import info from './../../../assets/infoIcon.png'
import cross from './../../../assets/cross.png'
import './../../../index.css';

type InfoNotificationProps = {
    message?: string;
};

const InfoNotification = (props: InfoNotificationProps) => {
    const { message } = props;

    return (
        <div
            className={`
            ${styles.notification}
            `}
        >
            <div>
                <img src={info} />
                <h1><span>Maintenance Notification: </span>{message}</h1>
            </div>

            <img src={cross} />
        </div>
    );
};

export default InfoNotification;
