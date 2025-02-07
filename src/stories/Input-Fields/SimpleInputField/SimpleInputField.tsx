import styles from './SimpleInputField.module.scss';
import './../../../index.css';
import profile from './../../../assets/profileIcon.png';

type SimpleInputFieldProps = {
  imgpath?: string;
  active: string;
  label: string;
};

const SimpleInputField = (props: SimpleInputFieldProps) => {
  const { imgpath, active, label } = props;

  return (
    <div
      className={`
        ${styles.input} 
        ${active === 'default' ? styles.default : ''}
        ${active === 'invalid' ? styles.invalid : ''}
      `}
    >
      <div>
        <img className={imgpath === profile ? 'h-[19px]' : 'h-[14px]'} src={imgpath} alt="Icon" />
      </div>
      <input className={styles.basicInput} placeholder={label ? label : 'Email'} />
      {active === 'invalid' && <h1>Invalid input</h1>}
    </div>
  );
};

export default SimpleInputField;
