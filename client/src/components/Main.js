import React from 'react';
import Portfolio from './Portfolio';
import Blog from './Blog';

const Main = () => {
    return (
        <section id="main">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <Portfolio />
                        <Blog />
                    </div>
                </div>
            </div>
        </section>           
    );
}

export default Main