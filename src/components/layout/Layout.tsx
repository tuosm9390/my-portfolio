'use client'

import React, { useCallback, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ScrollProvider } from '../ScrollContext';

export interface LayoutProps { }

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <ScrollProvider>
            <Navbar isVisible={isVisible} />
            {children}
            <Footer isVisible={isVisible} />
        </ScrollProvider>
    );
}

export default Layout;