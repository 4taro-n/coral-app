import React from 'react';

import Navbar from '../Navbar';
import SubPageTop from '../SubPageTop';
import Services from '../Services';
import Facility from '../Facility';
import Footer from '../Footer';

function ServicesPage() {
    return (
        <div>
            <Navbar link_scroll={true}/>
            <SubPageTop
            subheading="診療案内"
            heading="DENTAL SERVICES"
            background_class="background-recruit"
            page_name="診療案内" />
            <Services />
            <Facility />
            <Footer />
        </div>
    )
}

export default ServicesPage;