import styles from './select.module.css';
import { useState, useEffect } from 'react';

type SelectOption = {
    value: string;
    label: string | number;
}

type SelectProps = {
    options: SelectOption[];    // array of objects
    value?: SelectOption; // Optional
    onChange: (value: SelectOption | undefined) => void;    
}

export function Select({options, value, onChange} : SelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    function clearOptions() {
        onChange(undefined);
    }

    function selectOption(option: SelectOption) {
        if(option !== value) 
            onChange(option);
        setIsOpen(false);
    }

    function isOptionSelected(option: SelectOption) {
        return value === option;
    }

    useEffect(() => {
        if(!isOpen)
            setHighlightedIndex(0);
    }, [isOpen]);

    return (
        <div 
            tabIndex={0} 
            className={styles.container}
            onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen(prev => !prev)}
        >
            <span className={styles.value}>{value?.label}</span>
            <button 
                className={styles['clear-btn']}
                onClick={e => {
                    clearOptions()
                    e.stopPropagation();
                }}
            >
                &times;
            </button>
            <div className={styles.divider} />
            <div className={styles['drop-down']} />
            <ul className={` ${styles.options} ${isOpen ? styles.show : ""} `}>
                {options.map((option, index) => (
                   <li 
                        key={option.label} 
                        onMouseEnter={() => setHighlightedIndex(index)}
                        onClick={e => {
                            e.stopPropagation();
                            selectOption(option);
                        }}
                        className={`
                            ${styles.option} 
                            ${isOptionSelected(option) ? styles.selected : ""}
                            ${highlightedIndex === index ? styles.highlighted : ""}
                        `}
                    >
                        {option.label}
                   </li> 
                ))}
            </ul>
        </div>
    );
}