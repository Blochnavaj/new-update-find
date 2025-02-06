import { useState } from 'react';
import styles from './BasicAccordion.module.scss';
import uparrow from './../../../assets/upArrowIcon.png';
import downarrow from './../../../assets/downArrowIcon.png';
import './../../../index.css';

type BasicAccordionProps = {
    items: {
        question: string;
        answer: string;
    }[];
};

const BasicAccordion = ({ items }: BasicAccordionProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className={`${styles.accordionWrapper}`}>
            <div className={styles.accordion}>
                {items.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <div
                            className={styles.header}
                            onClick={() => handleToggle(index)}
                        >
                            <span>{item.question}</span>
                            <span className={activeIndex === index ? styles.arrowUp : styles.arrowDown}>
                                {activeIndex === index ? <img src={uparrow} alt="Up" /> : <img src={downarrow} alt="Down" />}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className={styles.content} >
                                <span>{item.question}</span>
                                <h1>{item.answer}</h1>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BasicAccordion;
