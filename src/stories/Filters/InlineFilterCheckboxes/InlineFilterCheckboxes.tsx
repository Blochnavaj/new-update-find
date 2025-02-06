import { useState } from 'react';
import styles from './InlineFilterCheckboxes.module.scss';
import arrow from './../../../assets/downGrey.png';
import './../../../index.css';

type InlineFilterCheckboxesProps = {
    label: string;
    options: string[];
};

const InlineFilterCheckboxes = ({ options, label }: InlineFilterCheckboxesProps) => {
    const [checkedOptions, setCheckedOptions] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        if (checked) {
            // Add to checked options
            setCheckedOptions((prev) => [...prev, value]);
        } else {
            // Remove from checked options
            setCheckedOptions((prev) => prev.filter((item) => item !== value));
        }
    };

    return (
        <div className={styles.filterContainer}>
            {/* Header */}
            <div className={styles.filterHeader}>
                <h1>{label}</h1>
                <img src={arrow} alt="toggle" />
            </div>

            {/* Checkboxes */}
            <div className={styles.checkboxContainer}>
                {options.map((option, index) => (
                    <div key={index} className={styles.checkbox}>
                        <label>
                            <input
                                type="checkbox"
                                value={option}
                                checked={checkedOptions.includes(option)} // Controlled state
                                onChange={handleChange} // Handle change
                            />
                            {option}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InlineFilterCheckboxes;
