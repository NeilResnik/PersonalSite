import React from 'react';

import SiteNav from './site_nav';

function Layout({ children, pageInfo }) {
    return (
        <main>
            <SiteNav pageInfo={pageInfo} />
            {children}
        </main>

    );
}

export default Layout;
