import React from 'react';
import Portfolio from './Portfolio';
import Blog from './Blog';

const Main = () => {
    return (
        <section id="main">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Portfolio />
                        <Blog />
                    </div>
                </div>
            </div>
        </section>           
    );
}

export default Main