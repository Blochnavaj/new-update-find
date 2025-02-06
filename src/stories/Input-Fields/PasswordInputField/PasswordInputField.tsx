import styles from './PasswordInputField.module.scss';
import password from './../../../assets/passwrodIcon.png'
import './../../../index.css';

type PasswordProps = {
    placeholder?: string;
}

const PasswordInputField = (props: PasswordProps) => {
    const { placeholder } = props;

    return (
        <div
            className={`
            ${styles.input}
            `}
        >

            <div>
                <img src={password} />
            </div>
            <input className={styles.basicInput} type='password' placeholder={placeholder ? placeholder : 'Password'} />
        </div>
    );
};

export default PasswordInputField;
