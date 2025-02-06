import styles from './SubscriptionCard.module.scss';
import logo from './../../../assets/gf-logo.png';
import mobile from './../../../assets/gfLogoMobile.png';
import './../../../index.css';

type SubscriptionCardProps = {
    active: 'Advanced' | 'Premium' | 'Free';
    subscription: string;
    expiry?: string;
};

const SubscriptionCard = (props: SubscriptionCardProps) => {
    const { active, subscription, expiry } = props;

    return (
        <div
            className={`
            ${styles.subcard}
            ${active === 'Advanced' ? styles.Advanced : ''}
            ${active === 'Premium' ? styles.Premium : ''}
            ${active === 'Free' ? styles.Free : ''}
            `}
        >
            <img src={logo} alt="Logo" />
            <img className={styles.mobileImg} src={mobile} alt="Mobile Logo" />
            <h1>{subscription}</h1>
            {(active === 'Advanced' || active === 'Premium') && (
                <div className={styles.expiry}>
                    <h2>Expiry Date</h2>
                    <p>{expiry}</p>
                </div>
            )}
            {active !== 'Premium' && <button className={styles.upgradeButton}>Upgrade</button>}
        </div>
    );
};

export default SubscriptionCard;
