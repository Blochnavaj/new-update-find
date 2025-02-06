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
  // Track the currently open plan modals
  const [openPlans, setOpenPlans] = useState<{ [key: number]: boolean }>({});

  // Track which radio button is selected
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number | null>(null);

  // Handle toggling the plan details
  const handleTogglePlan = (index: number) => {
    setOpenPlans((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the clicked plan's visibility
    }));
  };

  // Handle radio button selection
  const handleRadioSelection = (index: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent triggering the plan toggle
    setSelectedPlanIndex(index);
  };

  return (
    <div className={styles.subscriptionToggle}>
      {plans.map((plan, index) => (
        <div key={index} className={`${styles.plan} ${openPlans[index] ? styles.active : ''}`}>
          
          {/* Plan Header */}
          <div className={styles.planHeader} onClick={() => handleTogglePlan(index)}>
            <div>
              <h2>
                {plan.title}
                {plan.discount && <span className={styles.discount}>{plan.discount}</span>}
              </h2>
              <p>${plan.price}<span>/month</span></p>
            </div>

            {/* Radio Button */}
            <input
              type="radio"
              name="subscription"
              checked={selectedPlanIndex === index}
              onClick={(e) => handleRadioSelection(index, e)}
              readOnly
              style={{ cursor: 'pointer' }}
            />
          </div>

          {/* Plan Details */}
          {openPlans[index] && (
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
                <button className={styles.subscribeButton}>Subscribe</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SubscriptionToggle;
