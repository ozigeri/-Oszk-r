import { ReactNode } from 'react';

type TooltipProps = {
    children: ReactNode;
    content: string;
    width?: 'default' | 'dynamic';
    variant?: 'default' | 'warning' | 'error' | 'success';
};

const Tooltip = ({ children, content, width = 'default', variant = 'default' }: TooltipProps) => {
    return (
        <div data-tooltip={content} data-tooltip-width={width} data-tooltip-type={variant}>
            {children}
        </div>
    );
};

export default Tooltip;
