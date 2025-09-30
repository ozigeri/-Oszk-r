import React, { useEffect, useRef } from 'react';

type SliderProps = {
    additionalClassName?: string;
    disabled?: boolean;
    min: number;
    max: number;
    step?: number | string;
    value: number;
    onChange: (value: number) => void;
    labelLeft?: string;
    labelRight?: string;
    labelTop?: string;
    tooltip?: boolean;
    tooltipType?: 'absolute' | 'relative';
    tooltipUnit?: string;
    labelsOnTop?: boolean;
    isVertical?: boolean;
    ariaValueText?: string;
    ariaDescription?: string;
};

const Slider: React.FC<SliderProps> = ({
    additionalClassName = '',
    disabled = false,
    min = 0,
    max = 100,
    step = 1,
    value,
    onChange,
    labelLeft,
    labelRight,
    labelTop,
    tooltip = false,
    tooltipType = 'relative',
    tooltipUnit = '',
    labelsOnTop = false,
    isVertical = false,
    ariaValueText,
    ariaDescription = 'Slider element',
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const containerClass = `
    a-slider
    ${labelsOnTop ? 'a-slider--labels-on-top' : ''}
    ${isVertical ? 'a-slider--vertical' : ''}
    ${tooltipType === 'absolute' && !tooltipUnit ? 'a-slider--unitless' : ''}
    ${additionalClassName}
  `.trim();

    const formattedValue = tooltipType === 'absolute' ? `${value}${tooltipUnit}` : `${value} %`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.target.value));
    };

    const inputElement = (
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            disabled={disabled}
            onChange={handleChange}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            aria-valuetext={ariaValueText}
            aria-description={ariaDescription}
        />
    );

    useEffect(() => {
        const percentage = ((value - min) / (max - min)) * 100;
        if (containerRef.current) {
            containerRef.current.style.setProperty('--slider-percentage', `${percentage}`);
        }
    }, [value]);

    return (
        <div ref={containerRef} className={containerClass}>
            {labelTop && <label>{labelTop}</label>}
            <div className="a-slider__inner">
                {labelLeft && <label>{labelLeft}</label>}
                {tooltip ? (
                    <div>
                        <span
                            className="a-tooltip -floating-shadow-s"
                            tooltip-type={tooltipType}
                            tooltip-unit={tooltipUnit}
                            aria-haspopup="false"
                        >
                            {formattedValue}
                        </span>
                        {inputElement}
                    </div>
                ) : (
                    inputElement
                )}
                {labelRight && <label>{labelRight}</label>}
            </div>
        </div>
    );
};

export default Slider;
