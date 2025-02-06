import { useState } from 'react';
import styles from './RangeFilter.module.scss';
import arrow from './../../../assets/downGrey.png';
import './../../../index.css';

type RangeFilterProps = {
    min: number;
    max: number;
    step?: number;
    currency?: string;
};

const RangeFilter = ({ min, max, step = 100, currency = '$' }: RangeFilterProps) => {
    const [range, setRange] = useState<{ minValue: number; maxValue: number }>({
        minValue: min,
        maxValue: max,
    });

    const handleMinChange = (value: number) => {
        if (value >= 0) {
            setRange((prev) => ({
                ...prev,
                minValue: Math.min(value, prev.maxValue - step),
            }));
        }
    };

    const handleMaxChange = (value: number) => {
        if (value >= 0) {
            setRange((prev) => ({
                ...prev,
                maxValue: Math.max(value, prev.minValue + step),
            }));
        }
    };

    const handleInputChange = (value: number, type: 'min' | 'max') => {
        const sanitizedValue = Math.max(0, value); // Prevent negative values
        if (type === 'min') {
            handleMinChange(sanitizedValue);
        } else if (type === 'max') {
            handleMaxChange(sanitizedValue);
        }
    };

    return (
        <div className={styles.rangeFilter}>
            <div className={styles.header}>
                <span>Price</span>
                <span className={styles.arrow}><img className={styles.downarrow} src={arrow} /></span>
            </div>
            <div className={styles.sliderWrapper}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={range.minValue}
                    onChange={(e) => handleMinChange(Number(e.target.value))}
                    className={styles.slider}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={range.maxValue}
                    onChange={(e) => handleMaxChange(Number(e.target.value))}
                    className={`${styles.slider} ${styles.maxValue}`}
                />
                <div
                    className={styles.track}
                    style={{
                        left: `${((range.minValue - min) / (max - min)) * 100}%`,
                        right: `${100 - ((range.maxValue - min) / (max - min)) * 100}%`,
                    }}
                />
            </div>
            <div className={styles.inputWrapper}>
                <div className={styles.inputBox}>
                    <span>{currency}</span>
                    <input
                        type="number"
                        value={range.minValue}
                        onChange={(e) => handleInputChange(Number(e.target.value), 'min')}
                    />
                </div>
                <div className={styles.inputBox}>
                    <span>{currency}</span>
                    <input
                        type="number"
                        value={range.maxValue}
                        onChange={(e) => handleInputChange(Number(e.target.value), 'max')}
                    />
                </div>
            </div>
        </div>
    );
};

export default RangeFilter;