import styles from './SearchableCheckboxFilter.module.scss'
import cross from './../../../assets/purpleCross.png';
import search from './../../../assets/greySearch.png';
import './../../../index.css';

type FilterDetail = {
    label: string;
    value: string;
};

type SearchableCheckboxFilter = {
    name: string;

    details: FilterDetail[];
    date: string;
};

type SearchableCheckboxFilterProps = {
    filters: SearchableCheckboxFilter[];
    options: string[];
};

const SearchableCheckboxFilter = ({ options }: SearchableCheckboxFilterProps) => {

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
                                type="checkbox"
                                name="checkboxGroup"
                                value={option}
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

export default SearchableCheckboxFilter;
