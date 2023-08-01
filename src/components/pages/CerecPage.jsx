import React from 'react';

import Navbar from '../Navbar';
import SubPageTop from '../SubPageTop';
import Cerec from '../Cerec';
import Footer from '../Footer';

function CerecPage() {
    return (
        <div>
            <Navbar link_scroll={true}/>
            <SubPageTop 
            subheading='セレック治療について'
            heading='CEREC'
            background_class="background-recruit"
            page_name="セレック治療" />
            <Cerec />
            <Footer />
        </div>
    )
}

export default CerecPage;
