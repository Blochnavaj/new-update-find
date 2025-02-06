import { useState } from 'react';
import styles from './SavedFilter.module.scss';
import del from './../../../assets/deleteIcon.png';
import tick from './../../../assets/purpleTick.png';
import edit from './../../../assets/editIcon.png';
import save from './../../../assets/saveIcon.png';
import './../../../index.css';

type FilterDetail = {
    label: string;
    value: string;
};

type SavedFilterProps = {
    name: string;
    options: string[];
    details: FilterDetail[];
    date: string;
};

type SavedFilters = {
    filters: SavedFilterProps[];
    onFiltersUpdate: (updatedFilters: SavedFilterProps[]) => void; // Function to update filters
};

const SavedFilter = ({ filters, onFiltersUpdate }: SavedFilters) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [newName, setNewName] = useState<string>('');

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleDeleteFilter = (index: number) => {
        const updatedFilters = filters.filter((_, i) => i !== index);
        onFiltersUpdate(updatedFilters);
        setOpenIndex(null);
    };

    const handleSaveEdit = (index: number) => {
        if (newName.trim() === '') return;
        const updatedFilters = filters.map((filter, i) =>
            i === index ? { ...filter, name: newName } : filter
        );
        onFiltersUpdate(updatedFilters);
        setEditingIndex(null);
        setNewName('');
    };

    const handleDeleteDetail = (filterIndex: number, detailIndex: number) => {
        const updatedFilters = filters.map((filter, i) =>
            i === filterIndex
                ? { ...filter, details: filter.details.filter((_, j) => j !== detailIndex) }
                : filter
        );
        onFiltersUpdate(updatedFilters);
    };

    return (
        <div className={`noscrollbar ${styles.accordion}`}>
            {filters.map((filter, index) => (
                <div
                    key={index}
                    className={`noscrollbar ${styles.accordionItem} ${openIndex === index ? styles.active : ''}`}
                >
                    <div
                        className={styles.accordionHeader}
                        onClick={() => handleToggle(index)}
                    >
                        <div>
                            <div>
                                <h3>{filter.name}</h3>
                                {openIndex === index ? '' : <h2>{`${filter.date} days ago`}</h2>}
                            </div>
                            <p>{filter.options.join(', ')}</p>
                        </div>
                        {openIndex === index && (
                            <img src={del} onClick={() => handleDeleteFilter(index)} className="cursor-pointer" />
                        )}
                    </div>
                    {openIndex === index && (
                        <div className={styles.accordionContent}>
                            <div className={styles.contentHead} onClick={() => {
                                setEditingIndex(index);
                                setNewName(filter.name);
                            }}>
                                <h1>
                                    {editingIndex === index ? (
                                        <input
                                            type="text"
                                            value={newName}
                                            onChange={(e) => setNewName(e.target.value)}
                                            onBlur={() => handleSaveEdit(index)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit(index)}
                                            autoFocus
                                            className={`${styles.editInput} border border-gray-400 px-2 py-1 rounded`}
                                        />
                                    ) : (
                                        <>
                                            {filter.name}
                                            <span
                                                onClick={() => {
                                                    setEditingIndex(index);
                                                    setNewName(filter.name);
                                                }}
                                                className="cursor-pointer text-blue-500"
                                            >
                                                - Edit Name
                                            </span>
                                        </>
                                    )}
                                </h1>
                                <img
                                    className="cursor-pointer"
                                    src={editingIndex === index ? save : edit}
                                    onClick={() => {
                                        if (editingIndex === index) {
                                            handleSaveEdit(index);
                                        } else {
                                            setNewName(filter.name);
                                            setEditingIndex(index);
                                        }
                                    }}
                                />
                            </div>
                            <div className={`${styles.bar}`}></div>
                            {filter.details.map((detail, idx) => (
                                <div key={idx} className={styles.detailItem}>
                                    <div>
                                        <img alt='tick' src={tick} />
                                        <span className={styles.itemLabel}>
                                            {detail.label} - {detail.value}
                                        </span>
                                        <img
                                            alt='delete'
                                            src={del}
                                            onClick={() => handleDeleteDetail(index, idx)}
                                            className="cursor-pointer"
                                        />
                                    </div>
                                    <div className={`${styles.bar}`}></div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SavedFilter;
