import { useState } from 'react';
import styles from './SubscriptionToggle.module.scss';
import './../../../index.css';
import tick from './../../../assets/purpleTick.png';
import cross from './../../../assets/greyCross.png';

type SubscriptionPlan = {
    title: string;
    price: string;
    benefits: string[];
    isActive: boolean;
    discount?: string;
};

type SubscriptionToggleProps = {
    plans: SubscriptionPlan[];
};

const SubscriptionToggle = ({ plans }: SubscriptionToggleProps) => {
    // Track which plans are expanded (multiple open plans allowed)
    const [activePlanIndex, setActivePlanIndex] = useState<number | null>(null);


    

    // Handle toggling dropdown details
    const handleToggle = (index: number) => {
        setActivePlanIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className={styles.subscriptionToggle}>
            {plans.map((plan, index) => (
                <div
                    key={index}
                    className={`${styles.plan} ${activePlanIndex === index ? styles.active : ''}`}
                >
                    <div className={styles.planHeader} onClick={() => handleToggle(index)}>
                        <div>
                            <h2>
                                {plan.title}
                                {plan.discount && (
                                    <span className={styles.discount}>
                                        {plan.discount}
                                    </span>
                                )}
                            </h2>
                            <p>${plan.price}<span>/month</span></p>
                        </div>
                        <input
                            type="radio"
                            name="subscription"
                            checked={activePlanIndex === index}
                            readOnly
                        />
                    </div>
                    {activePlanIndex === index && (
                        <div className={styles.planDetails}>
                            <div>
                                <ul className={styles.ticklist}>
                                    {plan.benefits.map((benefit, idx) => (
                                        <li key={idx}>
                                            <img src={tick} alt="tick" /> {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <ul className={styles.crosslist}>
                                    {plan.benefits.map((benefit, idx) => (
                                        <li key={idx}>
                                            <img src={cross} alt="cross" /> {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className={styles.additionalInfo}>
                                    Additional fees may apply due to payment provider commissions. Subscription plans and pricing may be subject to change by our team.
                                </p>
                                <button className={styles.subscribeButton}>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SubscriptionToggle;
