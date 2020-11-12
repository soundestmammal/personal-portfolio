import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Spotlight from '../components/spotlight';
import Projects from '../components/projects';

export default function Home() {
    return (
        <>
        <Helmet>
            <title>Home | Robert Checco</title>        
        </Helmet>
        <Layout>
            <main>
                <Spotlight />
                <Projects />
            </main>
        </Layout>
        </>
    )
}