import { useState } from 'react';
import styles from './InfoToggle.module.scss';
import './../../../index.css';
import arrow from './../../../assets/downArrowIcon.png';
import infoImg from './../../../assets/infoGrey.png';
import './../../../index.css';

type SubscriptionPlan = {
    title: string;
    price: string;
    benefits: string[];
    discount?: string;
};

type InfoToggleProps = {
    plans: SubscriptionPlan[];
};

const InfoToggle = ({ plans }: InfoToggleProps) => {
    const [openPlans, setOpenPlans] = useState<number[]>([]);
    const [hoveredInfo, setHoveredInfo] = useState<{ [key: string]: boolean }>({});

    const handleToggle = (index: number) => {
    setOpenPlans((prevOpenPlans) =>
      prevOpenPlans.includes(index) ? [] : [index]
    );
  };

    const handleMouseEnter = (key: string) => {
        setHoveredInfo((prev) => ({ ...prev, [key]: true }));
    };

    const handleMouseLeave = (key: string) => {
        setHoveredInfo((prev) => ({ ...prev, [key]: false }));
    };

    return (
        <div className={styles.InfoToggle}>
            {plans.map((plan, index) => (
                <div
                    key={index}
                    className={`${styles.plan} ${openPlans.includes(index) ? styles.active : ''}`}
                >
                    <div
                        className={styles.planHeader}
                        onClick={() => handleToggle(index)}
                    >
                        <div className={`${styles.header}`}>
                            <h1>{plan.title}</h1>
                            <div
                                className={styles.infoContainer}
                                onMouseEnter={() => handleMouseEnter(`plan-${index}-header`)}
                                onMouseLeave={() => handleMouseLeave(`plan-${index}-header`)}
                            >
                                <img src={infoImg} />
                                {hoveredInfo[`plan-${index}-header`] && (
                                    <div className={styles.infoText}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div
                            className={`${styles.arrow} ${openPlans.includes(index) ? styles.open : ''}`}
                        >
                            <img src={arrow} />
                        </div>
                    </div>
                    {openPlans.includes(index) && (<h1 className={styles.infoTextHead}>Loaded with tech features including navigation and heated seats. Comes with extra sets of tires. Minor repair may be needed on the rear defrost. </h1>)}

                    {openPlans.includes(index) && (

                        <div className={styles.planDetails}>

                            <div>

                                <div>
                                    <h3>Mean Price</h3>
                                    <div
                                        className={`${styles.infoContainer} hidden md:block`}
                                        onMouseEnter={() => handleMouseEnter(`plan-${index}-mean`)}
                                        onMouseLeave={() => handleMouseLeave(`plan-${index}-mean`)}
                                    >
                                        <img className='w-[23px] md:w-[10px]' src={infoImg} />
                                        {hoveredInfo[`plan-${index}-mean`] && (
                                            <div className={styles.infoText}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <h1>$2000</h1>
                                    <h2>+20%</h2>
                                    <div
                                        className={`${styles.infoContainer} md:hidden`}
                                        onMouseEnter={() => handleMouseEnter(`plan-${index}-mean`)}
                                        onMouseLeave={() => handleMouseLeave(`plan-${index}-mean`)}
                                    >
                                        <img src={infoImg} />
                                        {hoveredInfo[`plan-${index}-mean`] && (
                                            <div className={styles.infoText}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3>Mode Price</h3>
                                    <div
                                        className={`${styles.infoContainer} hidden md:block`}
                                        onMouseEnter={() => handleMouseEnter(`plan-${index}-mode`)}
                                        onMouseLeave={() => handleMouseLeave(`plan-${index}-mode`)}
                                    >
                                        <img className='w-[23px] md:w-[10px]' src={infoImg} />
                                        {hoveredInfo[`plan-${index}-mode`] && (
                                            <div className={styles.infoText}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <h1>$2000</h1>
                                    <h2>+20%</h2>
                                    <div
                                        className={`${styles.infoContainer} md:hidden ${styles.flipped}`}
                                        onMouseEnter={() => handleMouseEnter(`plan-${index}-mode`)}
                                        onMouseLeave={() => handleMouseLeave(`plan-${index}-mode`)}
                                    >
                                        <img src={infoImg} />
                                        {hoveredInfo[`plan-${index}-mode`] && (
                                            <div className={styles.infoText}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3>Median Price</h3>
                                    <div
                                        className={`${styles.infoContainer} hidden md:block`}
                                        onMouseEnter={() => handleMouseEnter(`plan-${index}-median`)}
                                        onMouseLeave={() => handleMouseLeave(`plan-${index}-median`)}
                                    >
                                        <img className='w-[23px] md:w-[10px]' src={infoImg} />
                                        {hoveredInfo[`plan-${index}-median`] && (
                                            <div className={styles.infoText}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <h1>$2000</h1>
                                    <h2>+20%</h2>
                                    <div
                                        className={`${styles.infoContainer} md:hidden`}
                                        onMouseEnter={() => handleMouseEnter(`plan-${index}-median`)}
                                        onMouseLeave={() => handleMouseLeave(`plan-${index}-median`)}
                                    >
                                        <img src={infoImg} />
                                        {hoveredInfo[`plan-${index}-median`] && (
                                            <div className={styles.infoText}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default InfoToggle;
