import '../styles/style.scss';
import React from 'react';
import { Container } from 'react-bootstrap';

import Layout from '../components/layout';

function Bio() {
    // TODO
    // Image
    // Better Bio
    return (
        <Container>
            <p>
                I'm Neil Resnik, a recent graduate from Northeastern University with
                a degree in Computer Engineering. I am currently looking for work in
                software development, with a focus on lower level languages and coding.
                I am espicially interested in embedded or distributed systems, and
                love writing C, C++, and Rust in particular.
            </p>
        </Container>
    );
}

function AboutPage() {
    const page_info = {
        pageName: "about",
    };
    return (
        <Layout pageInfo={page_info}>
            <Bio />
        </Layout>
    );
}

export default AboutPage;
