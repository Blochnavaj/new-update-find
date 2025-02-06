import { useState } from 'react';
import styles from './SearchableRadioFilter.module.scss'
import cross from './../../../assets/purpleCross.png';
import search from './../../../assets/greySearch.png';
import './../../../index.css';

type FilterDetail = {
    label: string;
    value: string;
};

type SearchableRadioFilter = {
    name: string;

    details: FilterDetail[];
    date: string;
};

type SearchableRadioFilterProps = {
    filters: SearchableRadioFilter[];
    options: string[];
};

const SearchableRadioFilter = ({ options }: SearchableRadioFilterProps) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleRadioChange = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div className={styles.filterContainer}>
            <img src={cross} />
            <div className={styles.topbar}></div>
            <h1>Make</h1>
            <div className={styles.searchbox}>
                <img src={search} />
                <input
                    type="text"
                    placeholder='Search your make'
                />
            </div>
            <div>
                {options.map((option, index) => (
                    <div key={index} className={styles.checkbox}>
                        <label>
                            {option}
                            <input
                                type="radio"
                                name="radioGroup"
                                value={option}
                                checked={selectedOption === option}
                                onChange={() => handleRadioChange(option)}
                            />

                        </label>
                    </div>
                ))}

            </div>
            <div className={styles.bar}></div>
            <button>See Listings</button>
        </div>
    );
};

export default SearchableRadioFilter;
