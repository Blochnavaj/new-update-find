import styles from './EditableInputField.module.scss';
import profile from './../../../assets/profileIcon.png';
import './../../../index.css';
import { useState } from 'react';
import edit from './../../../assets/editIcon.png';
import save from './../../../assets/saveIcon.png';
import email from './../../../assets/emailIcon.png';

type EditableInputFieldProps = {
    title: string;
    label?: string;
    initialActive: string; // Changed 'active' to 'initialActive' for better control
};

const EditableInputField = (props: EditableInputFieldProps) => {
    const { title, label, initialActive } = props;

    // State to control active mode
    const [active, setActive] = useState(initialActive);

    return (
        <div
            className={`
                ${styles.input}
                ${active === 'editable' ? styles.default : ''}
                ${active === 'saved' ? styles.invalid : ''}
            `}
        >
            <div className={`${styles.profile}`}>
                <img src={title === 'Name' ? profile : email} alt="Profile" />
            </div>
            <div className={`${styles.main}`}>
                <h1>{title}</h1>
                {active === 'editable' ? <input type="text" /> : <h1>{label}</h1>}
            </div>
            {/* Show edit and save icons only for the "Name" field */}
            {title === 'Name' && active === 'saved' && (
                <img
                    src={edit} // Pen icon for switching to editable mode
                    alt="Edit"
                    onClick={() => setActive('editable')}
                    style={{ cursor: 'pointer' }}
                />
            )}

            {title === 'Name' && active === 'editable' && (
                <img
                    src={save} // Floppy disk icon for saving and switching back to view mode
                    alt="Save"
                    onClick={() => setActive('saved')}
                    style={{ cursor: 'pointer' }}
                />
            )}
        </div>
    );
};

export default EditableInputField;
