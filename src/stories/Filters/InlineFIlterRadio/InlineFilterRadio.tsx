import { useState } from 'react';
import styles from './InlineFilterRadio.module.scss';
import arrow from './../../../assets/downGrey.png';
import './../../../index.css';

type InlineFilterRadioProps = {
    label: string;
    options: string[];
};

const InlineFilterRadio = ({ options, label }: InlineFilterRadioProps) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleRadioChange = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div className={styles.filterContainer}>
            <div className={styles.filterHeader}>
                <h1>{label}</h1>
                <img src={arrow} alt="Arrow" />
            </div>

            <div className={styles.radioContainer}>
                {options.map((option, index) => (
                    <div key={index} className={styles.radio}>
                        <label>

                            <input
                                type="radio"
                                name="radioGroup"
                                value={option}
                                checked={selectedOption === option}
                                onChange={() => handleRadioChange(option)}
                            />
                            {option}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InlineFilterRadio;
