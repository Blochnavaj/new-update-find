import { useState } from 'react';
import styles from './NotificationToggle.module.scss';
import tick from './../../../assets/purpleTick.png';
import './../../../index.css';

type SubscriptionPlan = {
    title: string;
    price: string;
    benefits: string[];
    isActive: boolean;
    discount?: string;
};

type NotificationToggleProps = {
    plans: SubscriptionPlan[];
};

const NotificationToggle = ({ plans }: NotificationToggleProps) => {
    // Track the currently open plan
    const [openPlanIndex, setOpenPlanIndex] = useState<number | null>(null);

    // Toggle details dropdown
    const handleToggleDropdown = (index: number) => {
        setOpenPlanIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // Track which plans have notifications enabled
    const [enabledPlans, setEnabledPlans] = useState<{ [key: number]: boolean }>({});

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
                <div key={index} className={`${styles.plan} ${openPlanIndex === index ? styles.active : ''}`}>
                    <div className={styles.planHeader} onClick={() => handleToggleDropdown(index)}>
                        <div className={styles.headerText}>
                            <h2>Saved Search {index}</h2>
                            <h1>BWM, Audi, Toyota, Nissan, Tesla, Lada, Hyundai, Haval, Automatic, Color...</h1>
                        </div>
                        <div
                            className={`${styles.toggleContainer} ${enabledPlans[index] ? styles.active : ''}`}
                            onClick={(e) => handleToggleNotification(index, e)}
                        >
                            <div className={styles.togglHead}></div>
                        </div>
                    </div>
                    {openPlanIndex === index && (
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
                                    {plan.benefits.map((benefit, idx) => (
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
