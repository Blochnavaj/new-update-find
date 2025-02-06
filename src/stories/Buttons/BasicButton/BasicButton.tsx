import styles from './BasicButton.module.scss';
import './../../../index.css';

type BasicButtonProps = {
    label?: string;
    active: 'enabled' | 'disabled';
    bordercolor?: string;
};

const BasicButton = (props: BasicButtonProps) => {
    const { label, active } = props;

    return (
        <button
            className={`
            ${styles.button} 
            ${active === 'enabled' ? styles.enabled : ''} 
            ${active === 'disabled' ? styles.disabled : ''}
            `}
            disabled={active === 'disabled'}
        >
            {label}
        </button>
    );
};

export default BasicButton;
