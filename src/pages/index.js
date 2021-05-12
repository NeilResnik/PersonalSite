import '../styles/style.scss';
import React from 'react';

import Layout from '../components/layout';

function IndexPage() {
    const page_info = {
        pageName: "index",
    };
    return (
        <Layout pageInfo={page_info}>
        </Layout>
    );
}

export default IndexPage
