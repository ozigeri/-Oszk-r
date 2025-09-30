import AuthenticatedContent from '@/components/Auth/AuthenticatedContent';
import { logout } from '@/components/Auth/AuthFunctions';
import NotAuthenticatedContent from '@/components/Auth/NotAuthenticatedContent';
import DotEnv from '@/utils/DotEnv';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Sidenav = () => {
    const theme = useSelector((state: any) => state.theme);
    const isDarkMode = theme.isDarkMode;

    const navRef = useRef<HTMLElement | null>(null);

    const NAV_CONFIG = {
        authEnabled: DotEnv.authEnabled,
        openOnHover: true,
    };

    const SIMPLE_NAV_ITEMS: any[] = [
        {
            text: '3D Dashboard',
            href: '/',
            authNeeded: false,
        },
        {
            text: "Plant selector",
            href: '/plant-selector',
            authNeeded: false
        },
        // {
        //     text: 'Settings',
        //     href: '/settings/app',
        //     authNeeded: true,
        // },
    ];

    const DROPDOWN_NAV_ITEMS: any[] = [
        // {
        //     groupName: 'Settings',
        //     authNeeded: true,
        //     items: [
        //         {
        //             text: 'Application settings',
        //             href: '/settings',
        //         },
        //     ],
        // },
    ];

    const navigate = useNavigate();

    const goToPage = (e: any, url: string) => {
        e.preventDefault();
        navigate(url);
        closeNav();
    };

    const closeNav = () => {
        if (navRef.current) {
            navRef.current.classList.remove('-open', '-opening');

            const openedElements = navRef.current.querySelectorAll('.-open');

            openedElements.forEach((el) => {
                if (el.tagName.toLowerCase() !== 'button') {
                    el.classList.remove('-open');
                }
            });

            const openDropdowns = navRef.current.querySelectorAll('.m-side-navigation .a-menu-item -open');
            openDropdowns.forEach((li) => {
                li.classList.remove('-open');
            });
        }
    };

    return (
        <div>
            <nav
                ref={navRef}
                style={{ zIndex: 999, borderRight: isDarkMode ? "1px solid rgb(81, 81, 81)" : "none" }}
                className={`m-side-navigation ${isDarkMode ? '-secondary' : '-contrast'}`}
                aria-label="Side Navigation"
                aria-hidden="false"
                onMouseEnter={() => NAV_CONFIG.openOnHover && navRef.current?.classList.add('-open')}
                onMouseLeave={() => NAV_CONFIG.openOnHover && navRef.current?.classList.remove('-open')}
            >
                <div className="m-side-navigation__header" style={{ marginTop: '4px' }}>
                    <div className="m-side-navigation__header__label -size-l highlight">{DotEnv.appName}</div>
                    <button
                        type="button"
                        className="a-button a-button--integrated -without-label m-side-navigation__header__trigger -open"
                        aria-haspopup="false"
                        aria-label="Open Side Navigation"
                    >
                    </button>
                    <button
                        type="button"
                        className="a-button a-button--integrated -without-label m-side-navigation__header__trigger -close"
                        aria-haspopup="false"
                        aria-label="Close Side Navigation"
                        tabIndex={-1}
                    >
                    </button>
                </div>
                <ul className="m-menu-group" role="menubar" aria-orientation="vertical">
                    {NAV_CONFIG.authEnabled ? (
                        <NotAuthenticatedContent>
                            <li className="a-menu-item" role="none">
                                <div className="a-menu-item__wrapper">
                                    <a
                                        onClick={(e) => goToPage(e, '/login')}
                                        role="menuitem"
                                        className="a-menu-item__link"
                                        aria-disabled="false"
                                    >
                                        <span className="a-menu-item__label">Login</span>
                                    </a>
                                </div>
                            </li>
                        </NotAuthenticatedContent>
                    ) : (
                        <></>
                    )}

                    {SIMPLE_NAV_ITEMS.map((item, idx) => {
                        if (item.authNeeded) {
                            return (
                                <AuthenticatedContent key={idx}>
                                    <li className="a-menu-item" role="none">
                                        <div className="a-menu-item__wrapper">
                                            <a
                                                onClick={(e) => goToPage(e, item.href)}
                                                role="menuitem"
                                                className="a-menu-item__link"
                                                aria-disabled="false"
                                            >
                                                {item.icon}
                                                <span className="a-menu-item__label">{item.text}</span>
                                            </a>
                                        </div>
                                    </li>
                                </AuthenticatedContent>
                            );
                        } else {
                            return (
                                <li key={idx} className="a-menu-item" role="none">
                                    <div className="a-menu-item__wrapper">
                                        <a
                                            onClick={(e) => goToPage(e, item.href)}
                                            role="menuitem"
                                            className="a-menu-item__link"
                                            aria-disabled="false"
                                        >
                                            {item.icon}
                                            <span className="a-menu-item__label">{item.text}</span>
                                        </a>
                                    </div>
                                </li>
                            );
                        }
                    })}

                    {(DROPDOWN_NAV_ITEMS || []).map((group, idx: number) => {
                        return (
                            <AuthenticatedContent key={idx}>
                                <li className="a-menu-item" role="none">
                                    <div className="a-menu-item__wrapper">
                                        <button
                                            type="button"
                                            role="menuitem"
                                            className="a-menu-item__group"
                                            aria-disabled="false"
                                            // aria-controls={`group-id-${idx}`}
                                            aria-label="open group"
                                            onClick={(e) => {
                                                const li = (e.currentTarget as HTMLElement).closest('li');
                                                li?.classList.toggle('-open');
                                            }}
                                        >
                                            {group.icon && group.icon}
                                            <span className="a-menu-item__label">{group.groupName}</span>
                                            <i className="a-icon ui-ic-down-small"></i>
                                        </button>
                                    </div>
                                    <ul id={`group-id-${idx}`} className="m-menu-group__group" role="menu">
                                        {group?.items.map((item: any, idx: number) => {
                                            return (
                                                <li key={idx} className="a-menu-item -indent" role="none">
                                                    <div className="a-menu-item__wrapper">
                                                        <a
                                                            href="#"
                                                            onClick={(e) => goToPage(e, '/settings/app')}
                                                            role="menuitem"
                                                            className="a-menu-item__link"
                                                            aria-disabled="false"
                                                        >
                                                            <span className="a-menu-item__label">{item.text}</span>
                                                        </a>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            </AuthenticatedContent>
                        );
                    })}

                    {NAV_CONFIG.authEnabled ? (
                        <AuthenticatedContent>
                            <li className="a-menu-item" role="none">
                                <div className="a-menu-item__wrapper">
                                    <a
                                        onClick={() => logout()}
                                        role="menuitem"
                                        className="a-menu-item__link"
                                        aria-disabled="false"
                                    >
                                        <span className="a-menu-item__label">Logout</span>
                                    </a>
                                </div>
                            </li>
                        </AuthenticatedContent>
                    ) : (
                        <></>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Sidenav;
