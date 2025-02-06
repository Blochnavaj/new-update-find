import { useState } from 'react';
import styles from './SortModal.module.scss';
import cross from './../../../assets/purpleCross.png';
import './../../../index.css';

const SortModal = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleRadioChange = (option: string) => {
        setSelectedOption(option);
    };

    const defaultOptions = [
        'Date Listed',
        'Date Listed',
        'Price',
        'Price',
        'Mileage',
        'Mileage',
        'Year',
        'Year',
        'Margin',
        'Margin',
    ];

    const sortingOptions = [
        'Newest First',
        'Oldest First',
        'Highest First',
        'Lowest First',
        'Lowest First',
        'Highest First',
        'Newest First',
        'Oldest First',
        'Highest First',
        'Lowest First',
    ];

    return (
        <div className={`${styles.filterContainer} ${styles.open}`}>
            <img src={cross} alt="Close" />
            <div className={styles.topbar}></div>
            <h1>Sort</h1>
            <div className='overflow-scroll noscrollbar py-4'>
                {defaultOptions.map((option, index) => (
                    <div key={index} className={styles.checkbox}>
                        <label>
                            <span className={styles.sortOption}>
                                {option}
                                <span className={styles.sortSpan}> - {sortingOptions[index]}</span>
                            </span>
                            <input
                                type="radio"
                                name="radioGroup"
                                value={`${option}-${index}`}
                                checked={selectedOption === `${option}-${index}`}
                                onChange={() => handleRadioChange(`${option}-${index}`)}
                            />
                        </label>
                    </div>
                ))}
            </div>
            <div className={styles.bar}></div>
            <button className={styles.seeListings}>See Listings</button>
        </div>
    );
};

export default SortModal;
