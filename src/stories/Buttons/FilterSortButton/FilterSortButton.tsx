import styles from './FilterSortButton.module.scss';
import './../../../index.css';

type FilterSortButtonProps = {
    label: string;
    active?: 'filter' | 'sort';
    imgpath: string;
};

const FilterSortButton = (props: FilterSortButtonProps) => {
    const { label, active, imgpath } = props;
    return (
        <button
            className={`
            ${styles.button} 
            ${active === 'filter' ? styles.Filter : ''} 
            ${active === 'sort' ? styles.Sort : ''}
            `}
        >
            <img src={imgpath} className={styles.icon} />
            {label}
        </button>
    );
};

export default FilterSortButton;
