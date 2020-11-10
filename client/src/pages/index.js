import React from 'react';
import Layout from '../components/layout';
import Spotlight from '../components/spotlight';
import Projects from '../components/projects';

export default function Home() {
    return (
        <Layout>
            <main>
                <Spotlight />
                <Projects />
            </main>
        </Layout>
    )
}