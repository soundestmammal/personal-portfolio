import React from 'react';
import SantaCruz from '../rob-santacruz.jpg';

const About = () => {
    return(
        <section className="about-me">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Full Stack Developer based out of NYC</p>

            <div className="about-me__body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing eius nobis corrupti perferendis! Lorem ipsum dolor si elit. Voluptate eius incidunt, unde expliem architecto provident!</p>
                <p>Lorem ipsum dolor t amet consectetur adipisicing elit. Facilis soluta nisi dolor doloremque voluptate esse perferendis numquam! Maiores deleniti doloremque animi provident maxime. Laborum, maxime asperiores reprehenderit debitis similique quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, vero dolores omnis inventore quia sequi reprehenderit ducimus laboriosam illo molestias officia placeat! Nobis cumque consequuntur cupiditate velit pariatur a dolores.</p>
            </div>

            <img src={SantaCruz} alt="Rob2" class="about-me__img" />
        </section>
    );
}

export default About;