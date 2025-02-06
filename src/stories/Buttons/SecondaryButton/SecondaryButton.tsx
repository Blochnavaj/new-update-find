import styles from './SecondaryButton.module.scss';
import './../../../index.css';

const SecondaryButton = () => {

    return (
        <button
            className={`
            ${styles.button}
            `}
        >
            Upgrade
        </button>
    );
};

export default SecondaryButton;
