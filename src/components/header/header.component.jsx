import React from 'react';

import TopNav from './../topnav/topnav.component';
import Navbar from './../navigation/navigation.component';

const Header=()=>(
    <header className="header">
        <TopNav />
        <Navbar />
    </header>
)

export default Header;