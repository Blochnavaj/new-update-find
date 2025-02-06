import { useState, useRef, useEffect } from 'react';
import './../../../index.css';
import greyRight from './../../../assets/greyRight.png';
import purpleLeft from './../../../assets/purpleLeft.png';
import purpleRight from './../../../assets/purpleRight.png';
import styles from './FilterPanel.module.scss';
import RangeFilter from './../RangeFilter/RangeFilter';
import VehicleCheckbox from './../InlineFilterCheckboxes/InlineFilterCheckboxes';

const FilterPanel = () => {
    // Using an object to track multiple panels independently
    const [activePanels, setActivePanels] = useState<{ [key: string]: boolean }>({
        range: false,
        vehicle: false,
        make: false
    });

    const panelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                setActivePanels({ range: false, vehicle: false, make: false }); // Close all panels when clicking outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Function to toggle panels independently
    const togglePanel = (panel: string) => {
        setActivePanels((prevPanels) => ({
            ...prevPanels,
            [panel]: !prevPanels[panel] // Toggle only the clicked panel
        }));
    };

    return (
        <div className={styles.accordion} ref={panelRef}>
            <div className={styles.accordionHead}>
                <img className={styles.backButton} src={purpleLeft} alt="Back" />
                <h1>Filters</h1>
                <h2>Reset</h2>
            </div>
            <h2>Saved Filters</h2>
            <div className={styles.savedFilter}>
                <div>
                    <h1>Choose Filter</h1>
                    <h2>Access your saved options</h2>
                </div>
                <img src={purpleRight} alt="Saved Filters" />
            </div>

            <h1 className={styles.filterHeader}>Filters</h1>
            <div className={styles.filtersList}>

                {/* PRICE FILTER */}
                 <div>
                    <div className={styles.rangeFilter} onClick={() => togglePanel('range')}>
                        {!activePanels.range && (
                            <div className={styles.inactiveRange}>
                                <div>
                                    <h1>Price</h1>
                                    <h2>Any</h2>
                                </div>
                                <img className='cursor-pointer' src={greyRight} alt="Expand" />
                            </div>
                        )}
                    </div>
                    {activePanels.range && <div className='relative'>
                        <div onClick={() => togglePanel('range')} className='cursor-pointer absolute z-[100]  w-5 h-5 top-8 -right-1'></div>
                        <RangeFilter min={1} max={50000} step={100} currency='$' />
                    </div>}
                </div>

                <div className={styles.bar}></div>

                {/* VEHICLE TYPE */}
                <div>

                    {!activePanels.vehicle && (
                        <div className={styles.vehicleType} onClick={() => togglePanel('vehicle')}>
                            <div>
                                <h1>Vehicle Type</h1>
                                <h2>Any</h2>
                            </div>
                            <img className='cursor-pointer' src={greyRight} alt="Expand" />
                        </div>
                    )}


                    {activePanels.vehicle && (
                        <div className={`relative ${styles.vehicleComponent}`}>
                            <div onClick={() => togglePanel('vehicle')} className='cursor-pointer absolute z-[100]  w-5 h-5 top-8 -right-1'></div>
                            <VehicleCheckbox label="Vehicle Type" options={["BMW", "Audi", "Tesla", "Mercedes"]} />
                        </div>
                    )}
                </div>

                <div className={styles.bar}></div>

                {/* MAKE */}
                <div>
                    {!activePanels.make && (
                        <div className={styles.vehicleType} onClick={() => togglePanel('make')}>
                            <div>
                                <h1>Make</h1>
                                <h2>Any</h2>
                            </div>
                            <img className='cursor-pointer' src={greyRight} alt="Expand" />
                        </div>
                    )}


                    {activePanels.make && (
                        <div className={`relative ${styles.vehicleComponent}`}>
                            <div onClick={() => togglePanel('make')} className='cursor-pointer absolute z-[100]  w-5 h-5 top-8 -right-1'></div>
                            <VehicleCheckbox label="Make" options={["BMW", "Audi", "Tesla", "Mercedes"]} />
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

export default FilterPanel;
