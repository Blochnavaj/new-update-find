import styles from './IconButton.module.scss';
import icon from './../../../assets/starIcon.png'
import './../../../index.css';

const IconButton = () => {

    return (
        <button
            className={`
            ${styles.button}
            `}

        >
            <img src={icon} />Upgrade to Unlock
        </button>
    );
};

export default IconButton;
