import { useLocation, useNavigate } from 'react-router-dom';
import styles from './MainMenu.module.scss';
import './../../../index.css';

import profile from './../../../assets/profile.png';
import notifications from './../../../assets/notifications.png';
import catalog from './../../../assets/catalog.png';
import subscription from './../../../assets/subscription.png';
import support from './../../../assets/support.png';

import pprof from './../../../assets/pprof.png';
import pnotif from './../../../assets/pnotif.png';
import pcatalog from './../../../assets/pcatalog.png';
import psub from './../../../assets/psub.png';
import psupport from './../../../assets/psupport.png';

const options = [
    { label: 'Profile', src: profile, purple: pprof, path: '/profile' },
    { label: 'Notifications', src: notifications, purple: pnotif, path: '/notifications' },
    { label: 'Catalog', src: catalog, purple: pcatalog, path: '/catalog' },
    { label: 'Subscription', src: subscription, purple: psub, path: '/subscription' },
    { label: 'Support', src: support, purple: psupport, path: '/support' },
];

const MainMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className={styles.menu}>
            {options.map((option, index) => {
                const isActive = location.pathname === option.path;
                return (
                    <div
                        key={index}
                        className={`${styles.item} ${isActive ? styles.active : ''}`}
                        onClick={() => navigate(option.path)}
                    >
                        <div className={styles.option}>
                            <img src={isActive ? option.purple : option.src} alt={option.label} />
                            <h1 className={isActive ? styles.purpleColor : ''}>{option.label}</h1>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MainMenu;
