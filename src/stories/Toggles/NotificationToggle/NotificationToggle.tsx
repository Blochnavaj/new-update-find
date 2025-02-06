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
  const [openPlanIndex, setOpenPlanIndex] = useState<number | null>(null);
  const [enabledPlans, setEnabledPlans] = useState<{ [key: number]: boolean }>({});

  // Toggle dropdown
  const handleToggleDropdown = (index: number) => {
    setOpenPlanIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Toggle notification switch
  const handleToggleNotification = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setEnabledPlans((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className={styles.NotificationToggle}>
      {plans.map((plan, index) => (
        <div key={index} className={`${styles.plan} ${openPlanIndex === index ? styles.active : ''}`}>
          <div className={styles.planHeader} onClick={() => handleToggleDropdown(index)}>
            <div className={styles.headerText}>
              <h2>Saved Search {index + 1}</h2>
              <h1>BWM, Audi, Toyota, Nissan, Tesla, Hyundai...</h1>
            </div>
            <div
              className={`${styles.toggleContainer} ${enabledPlans[index] ? styles.active : ''}`}
              onClick={(e) => handleToggleNotification(index, e)}
            >
              <div className={styles.toggleSwitch}></div>
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
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NotificationToggle;
