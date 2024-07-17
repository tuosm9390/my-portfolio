import React from 'react';
import styles from './Footer.module.css'

export interface FooterProps {
    isVisible: boolean;
}

const Footer: React.FC<FooterProps> = ({ isVisible }) => {
    return (
        <footer className={`${styles.footer_contatiner} ${isVisible ? styles.visible : styles.hidden}`}>
            <div className={styles.footerBox}>
                Footer
            </div>
        </footer>
    );
}

export default Footer;