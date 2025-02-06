import styles from './SearchInputField.module.scss';
import search from './../../../assets/searchIcon.png';
import './../../../index.css';

type SearchInputFieldProps = {
    active: string;
    placeholder?: string;
};

const SearchInputField = (props: SearchInputFieldProps) => {
    const { active, placeholder } = props;

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        const input = e.currentTarget;
        const regex = /^[a-zA-Z0-9\s-]{0,20}$/;

        // Filter the input value to allow only valid characters
        if (!regex.test(input.value)) {
            input.value = input.value.replace(/[^a-zA-Z0-9\s-]/g, '').slice(0, 20);
        }
    };

    return (
        <div
            className={`
            ${styles.input}
            ${active === 'default' ? styles.default : ''}
            ${active === 'invalid' ? styles.invalid : ''}
            `}
        >
            <div className='hidden md:block'>
                <img className='h-[16px]' src={search} alt="Search Icon" />
            </div>

            <input
                type="text"
                placeholder={placeholder}
                onInput={handleInput}
                className='ml-4'
            />
        </div>
    );
};

export default SearchInputField;
