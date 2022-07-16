import React from 'react';

import Navbar from '../Navbar';
import SubPageTop from '../SubPageTop';
import News from '../News';
import Footer from '../Footer';


function NewsPage() {
    return (
        <div>
            <Navbar link_scroll={true}/>
            <SubPageTop
            subheading="新着情報"
            heading="NEWS"
            background_class="background-recruit"
            page_name="新着情報" />
            <News />
            <Footer />
            
            {/* <EditerPage /> */}

        </div>
    )
}

export default NewsPage;
