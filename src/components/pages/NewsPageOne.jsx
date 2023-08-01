import React from 'react';

import Navbar from '../Navbar';
import SubPageTop from '../SubPageTop';
import NewsForOne from '../NewsForOne';
import Footer from '../Footer';

function NewsPageOne() {
    return (
        <div>
            <Navbar link_scroll={true}/>
            <SubPageTop
            subheading="新着情報"
            heading="NEWS"
            background_class="background-recruit"
            page_name="新着情報" />
            <NewsForOne />
            <Footer />
        </div>
    )
}

export default NewsPageOne;
