import React from 'react';
import styles from './Navbar.module.css'
import { useScrollContext } from '../ScrollContext';

export interface NavbarProps {
    isVisible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isVisible }) => {
    const { handleScroll, activeSection } = useScrollContext();

    console.log(activeSection)

    return (
        <nav className={`${styles.navbar_container} ${isVisible ? styles.visible : styles.hidden}`}>
            <div className={styles.navbarBox}>
                <ul className={`${styles.menuList} ${styles.logo}`}>
                    <li>로고</li>
                </ul>
            </div>
            <div className={styles.navbarBox}>
                <ul className={styles.menuList}>
                    <li
                        className={activeSection === 'aboutSection' ? styles.active : ''}
                        onClick={() => handleScroll('aboutRef')}
                    >
                        about
                    </li>
                    <li
                        className={activeSection === 'skillsSection' ? styles.active : ''}
                        onClick={() => handleScroll('skillsRef')}
                    >
                        skills
                    </li>
                    <li
                        className={activeSection === 'archiveSection' ? styles.active : ''}
                        onClick={() => handleScroll('archiveRef')}
                    >
                        archive
                    </li>
                    <li
                        className={activeSection === 'projectSection' ? styles.active : ''}
                        onClick={() => handleScroll('projectRef')}
                    >
                        project
                    </li>
                </ul>
            </div>
        </nav >
    );
}

export default Navbar;