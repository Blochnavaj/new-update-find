import { useState } from 'react';
import styles from './NotificationToggle.module.scss';
import tick from './../../../assets/purpleTick.png';
import './../../../index.css';

type SubscriptionPlan = {
    title: string;
    label: string;
    price: string;
    benefits: string[];
    benefits2: string[];
    isActive: boolean;
    discount?: string;
};

type NotificationToggleProps = {
    plans: SubscriptionPlan[];
};

const NotificationToggle = ({ plans }: NotificationToggleProps) => {
    // Track which plans are expanded
    const [openPlans, setOpenPlans] = useState<{ [key: number]: boolean }>({});

    // Track which plans have notifications enabled
    const [enabledPlans, setEnabledPlans] = useState<{ [key: number]: boolean }>({});

    // Toggle details dropdown
    const handleToggleDropdown = (index: number) => {
        setOpenPlans((prev) => ({
            ...prev,
            [index]: !prev[index], // Toggle the state of the selected plan
        }));
    };

    // Toggle notification switch
    const handleToggleNotification = (index: number, event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent triggering dropdown toggle when clicking the switch
        setEnabledPlans((prev) => ({
            ...prev,
            [index]: !prev[index], // Toggle the notification for this plan
        }));
    };

    return (
        <div className={styles.NotificationToggle}>
            {plans.map((plan, index) => (
                <div key={index} className={`${styles.plan} ${(openPlans[index] ? styles.active : '')}}`}>
                    <div className={styles.planHeader} onClick={() => handleToggleDropdown(index)}>
                        <div className={styles.headerText}>
                            <h2>{plan.title}</h2>
                            <h1>{plan.label}</h1>
                        </div>
                        <div
                            className={`${styles.toggleContainer} ${enabledPlans[index] ? styles.active : ''}`}
                            onClick={(e) => handleToggleNotification(index, e)}
                        >
                            <div className={styles.togglHead}></div>
                        </div>
                    </div>
                    {openPlans[index] && (
                        <div className={styles.planDetails}>
                            <div>
                                <ul className={styles.ticklist}>
                                    {plan.benefits.map((benefit, idx) => (
                                        <li className={styles.listItem} key={idx}>
                                            <img src={tick} alt="tick" /> {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <ul className={styles.crosslist}>
                                    {plan.benefits2.map((benefit, idx) => (
                                        <li className={styles.listItem} key={idx}>
                                            <img src={tick} alt="tick" /> {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default NotificationToggle;
