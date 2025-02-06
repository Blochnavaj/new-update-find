import { useState, useRef, useEffect } from 'react';
import './../../../index.css';
import greyRight from './../../../assets/greyRight.png';
import purpleLeft from './../../../assets/purpleLeft.png';
import purpleRight from './../../../assets/purpleRight.png';
import styles from './FilterPanelMobile.module.scss';
import RangeFilter from './../RangeFilter/RangeFilter';

import VehicleCheckbox from './../InlineFilterCheckboxes/InlineFilterCheckboxes';
import './../../../index.css';

const FilterPanelMobile = () => {
    const [activeComponent, setActiveComponent] = useState<string | null>(null); // Track active component
    const rangeRef = useRef<HTMLDivElement | null>(null);
    const vehicleTypeRef = useRef<HTMLDivElement | null>(null);
    const makeRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Attach the click event listener to the document
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            rangeRef.current &&
            !rangeRef.current.contains(event.target as Node) &&
            vehicleTypeRef.current &&
            !vehicleTypeRef.current.contains(event.target as Node) &&
            makeRef.current &&
            !makeRef.current.contains(event.target as Node)
        ) {
            setActiveComponent(null); // Deactivate all components if clicked outside
        }
    };

    const handleRangeClick = () => {
        setActiveComponent(activeComponent === 'range' ? null : 'range');
    };

    const handleVehicleTypeClick = () => {
        setActiveComponent(activeComponent === 'vehicleType' ? null : 'vehicleType');
    };

    const handleMakeClick = () => {
        setActiveComponent(activeComponent === 'make' ? null : 'make');
    };

    return (
        <div className={styles.accordion}>
            <div className={styles.accordionHead}>
                <img className={styles.backButton} src={purpleLeft} />
                <h1>Filters</h1>
                <h2>Reset</h2>
            </div>
            <div className={`${styles.bar} ${styles.topBar}`}></div>
            <h2>Saved Filters</h2>
            <div className={styles.savedFilter}>
                <div>
                    <h1>Choose Filter</h1>
                    <h2>Access your saved options</h2>
                </div>
                <img src={purpleRight} />
            </div>
            <h1 className={styles.filterHeader}>Filters</h1>
            <div className={styles.filtersList}>
                {/* Range Filter */}
                <div ref={rangeRef} className={styles.rangeFilter} onClick={handleRangeClick}>
                    {activeComponent === 'range' ? (
                        <RangeFilter min={1} max={50000} step={100} currency="$" />
                    ) : (
                        <div className={styles.inactiveRange}>
                            <div>
                                <h1>Price</h1>
                                <h2>Any</h2>
                            </div>
                            <img src={greyRight} />
                        </div>
                    )}
                </div>
                <div className={styles.bar}></div>

                {/* Vehicle Type Filter */}
                <div ref={vehicleTypeRef}>
                    {activeComponent === 'vehicleType' ? (
                        <div className={styles.vehicleComponent}>
                            <VehicleCheckbox label={'Vehicle Type'} options={['BMW', 'Audi', 'Tesla', 'Mercedes']} />
                        </div>
                    ) : (
                        <div className={styles.vehicleType} onClick={handleVehicleTypeClick}>
                            <div>
                                <h1>Vehicle Type</h1>
                                <h2>Any</h2>
                            </div>
                            <img src={greyRight} />
                        </div>
                    )}
                </div>
                <div className={styles.bar}></div>

                {/* Make Filter */}
                <div ref={makeRef}>
                    {activeComponent === 'make' ? (
                        <div className={styles.vehicleComponent}>
                            <VehicleCheckbox label={'Make'} options={['BMW', 'Audi', 'Tesla', 'Mercedes']} />
                        </div>
                    ) : (
                        <div className={styles.vehicleType} onClick={handleMakeClick}>
                            <div>
                                <h1>Make</h1>
                                <h2>Any</h2>
                            </div>
                            <img className={styles.greyRight} src={greyRight} />
                        </div>
                    )}
                </div>
            </div>

            <div className={`${styles.bar} ${styles.bottomBar}`}></div>
            <div className={styles.buttonContainer}>
                <button className={styles.saveFilters}>Save Filters</button>
                <button className={styles.seeListings}>See Listings</button>
            </div>
        </div>
    );
};

export default FilterPanelMobile;
