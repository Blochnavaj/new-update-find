import styles from './BackButton.module.scss';
import back from './../../../assets/backIcon.png'
import './../../../index.css';

type BackButtonProps = {
    label?: string;
    active?: 'withoutText' | 'withText';
};

const BackButton = (props: BackButtonProps) => {
    const { label, active } = props;

    return (
        <button
            className={`
            ${styles.button} 
            ${active === 'withoutText' ? styles.WithoutText : ''} 
            ${active === 'withText' ? styles.WithText : ''}
            `}
        >
            <img src={back} />
            {label}
        </button>
    );
};

export default BackButton;
