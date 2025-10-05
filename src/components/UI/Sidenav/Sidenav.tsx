import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './sidenav.scss';

type SideNavProps = {
    isOpen: boolean;
    onClose: () => void;
};

const menuItems = ['Utas hirdetés', 'Sofőr hirdetés', 'Fórum'];

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="sidenav-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={onClose}
                    />

                    <motion.nav
                        className="sidenav"
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        <ul className="sidenav-list">
                            {menuItems.map((item, index) => (
                                <motion.li
                                    key={item}
                                    className="sidenav-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                </>
            )}
        </AnimatePresence>
    );
};

export default SideNav;
