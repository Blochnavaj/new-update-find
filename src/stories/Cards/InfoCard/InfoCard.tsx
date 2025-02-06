import styles from './InfoCard.module.scss';
import arrow from './../../../assets/rightIcon.png';
import './../../../index.css';

type InfoCardProps = {
    active: string;
    imgpath: string;
    clickable: 'yes' | 'no';
    header: string;
    credentials?: string;
};

const InfoCard = (props: InfoCardProps) => {
    const { active, imgpath, clickable, header, credentials } = props;

    return (
        <div
            className={`
            ${styles.infocard}
            ${active === 'Phone' ? styles.Phone : ''}
            ${active === 'Email' ? styles.Email : ''}
            ${active === 'Notifications' ? styles.Notifications : ''}
            ${active === 'Support' ? styles.Support : ''}
            `}
        >
            <div>
                <div className={`${styles.img}`}>
                    <img src={imgpath} />
                </div>
                <div className={`${styles.creds}`}>
                    <h1 className={`
                    ${clickable === 'yes' ? styles.clickable : styles.nonclickable}
                    `}>{header}</h1>
                    {clickable === 'no' &&
                        <div className={`${styles.credentials}`}>
                            <p>{credentials}</p>
                        </div>
                    }
                </div>

            </div>
            {clickable === 'yes' && <img src={arrow} />}
        </div>
    );
};

export default InfoCard;
