import React from 'react';
import '../styles/style.css';

const Services = () => {
    return(
        <section className="my-services">
                <h2 className="section__title section__title--services">What I do</h2>
                    <div className="services">
                        <div className="service">
                            <h3>Design + Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ipsa aliquid. Illum, assumenda labore. Dignissimos modi omnis vel labore in, cumque similique officia explicabo molestias corporis iure, placeat velit deserunt?</p>
                        </div>
                        <div className="service">
                            <h3>E-Commerce</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, laborum nisi! Rerum veniam explicabo quasi quidem, sit accusantium et necessitatibus ullam, eos officiis repellat illo quo quisquam. Sunt, eius mollitia!</p>
                        </div>
                        <div className="service">
                            <h3>Data Science</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non doloribus, error incidunt reprehenderit nemo dignissimos consequatur quos atque. Alias mollitia libero voluptatem possimus cumque? In eveniet at quis expedita veritatis.</p>
                        </div>
                    </div>
            <a href="/" className="btn">My Work</a>
        </section>
    );
}

export default Services;