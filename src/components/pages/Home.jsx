import React from 'react';

import Navbar from '../Navbar';

import TopPage from '../TopPage';
import NewsInHome from '../NewsInHome';
import ServicesInHome from '../ServicesInHome';
import OfficeHours from '../OfficeHours';
import Covid from '../Covid';
import Line from '../Line';
import Access from '../Access';
import Footer from '../Footer';

import MarginForHome from '../MarginForHome';

function Home() {
    return (
        <div>
            <Navbar link_scroll={false}/>
            <TopPage />
            <Covid />
            <Line />
            <MarginForHome />
            <NewsInHome />
            <MarginForHome />
            <ServicesInHome />
            <OfficeHours />
            <MarginForHome />
            <Access />
            <Footer />
            
        </div>
    )
}

export default Home;
