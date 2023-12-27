import React from 'react';

import Navbar from '../Navbar';
import SubPageTop from '../SubPageTop';
import RecruitLink from '../RecruitLink';
import Form from '../MailForm/Form';
import Footer from '../Footer';

function Recruit() {
    return (
        <div>
            <Navbar link_scroll={true}/>
            <SubPageTop 
            subheading='採用情報'
            heading='RECRUIT'
            background_class="background-recruit"
            page_name="お問い合わせ" />
            <RecruitLink />
            <Form />
            <Footer />
        </div>
    )
}

export default Recruit;
