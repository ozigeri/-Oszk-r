import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AnimatedList.scss';

type AnimatedListProps<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    duration?: number;
    stagger?: number;
    className?: string;
    maxHeight?: string;
};

const AnimatedList = <T,>({
    items,
    renderItem,
    duration = 0.35,
    stagger = 0.05,
    className = '',
}: AnimatedListProps<T>) => {
    return (
        <div className={`animated-list-container ${className}`}>
            <AnimatePresence>
                {items.map((item, index) => (
                    <motion.div
                        key={(item as any).id || index}
                        className="animated-list-item"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration, delay: index * stagger }}
                        layout
                    >
                        {renderItem(item)}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default AnimatedList;
