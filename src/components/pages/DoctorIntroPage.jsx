import React from 'react';

import Navbar from '../Navbar';
import SubPageTop from '../SubPageTop';
import DoctorIntro from '../DoctorIntro';
import Access from '../Access';
import Footer from '../Footer';

function DoctorIntroPage() {
    return (
        <div>
            <Navbar link_scroll={true} />
            <SubPageTop 
            subheading='ごあいさつ'
            heading="Doctor's Introduction"
            background_class="background-recruit"
            page_name="ごあいさつ" />
            <DoctorIntro />
            <Footer />
        </div>
    )
}

export default DoctorIntroPage;