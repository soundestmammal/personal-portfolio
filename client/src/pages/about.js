import React from 'react';
import styled, { css } from 'styled-components';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/layout';
import rLogo from '../assets/R_logo.svg';

const Heading = styled.h1`
    font-size: 3em;
    color: white;
    font-weight: 700;
`;

const Subheading = styled.h2`
    margin-top: 1.5em;
    font-size: 1.25em;
    color: #AAAAAA;
`;

const Content = styled.h2`
    font-size: 1.25em;
    color: #E2DFDF;
    line-height: 1.6em;
`;

const SpotlightContainer = styled.div`
    width: 100%;
    height 400px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2em;
`;

const SpotlightContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`;

const SpotlightMe = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1em;
`;

const SpotlightIntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const SpotlightTitle = styled.h1`
    font-size: 1.25em;
    margin: 0;
    padding: 0;
    color: #E2DFDF;
    letter-spacing: 1px;
    font-weight: 400;
`;

const SpotlightSubtitle = styled.h1`
    font-size: 1em;
    margin: 0;
    padding: 0;
    color: #AAAAAA;
    font-weight: 400;
`;

const SpotlightIntro = styled.p`
    margin-bottom 1em;
    color: #E2DFDF;
    font-size: 1.25em;
    line-height: 1.5em;
`;

const SpotlightIconRow = styled.ul`
    list-style-type: none;
    margin-top: 1em;
    padding: 0;
    display: flex;
    flex-direction: row;
    width: 50%;
    color: white;
`;

export default function About() {
    return (
        <>
        <Helmet>
            <title>About | Robert Checco</title>        
        </Helmet>
        <Layout>
            <div>
                    <Heading>My programming journey</Heading>

                    <SpotlightMe>
                    <img src={rLogo} style={{ marginRight: '1.5em'}} />
                    <SpotlightIntroWrapper>
                        <SpotlightTitle>Robert Checco</SpotlightTitle>
                        <SpotlightSubtitle>Software Engineer</SpotlightSubtitle>
                    </SpotlightIntroWrapper>
                    </SpotlightMe>
                    <SpotlightIconRow>
                    <li><a href="https://www.github.com/soundestmammal" style={{ color: '#AAAAAA', fontSize: '1.25em', marginRight: '1.5em' }}><FontAwesomeIcon icon={['fab', 'github']}/></a></li>
                    <li><a href="https://www.linkedin.com/in/robertchecco/" style={{ color: '#AAAAAA', fontSize: '1.25em', marginRight: '1.5em' }}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                    <li><a href="https://drive.google.com/file/d/1MG9vtb8eK2s7Bs2IIkLTtC7JjwM0hVa3/view?usp=sharing" target="_blank" style={{ fontSize: '1em', border: '1px solid #AAAAAA', color: '#AAAAAA', padding: '3px 6px', textDecoration: 'none'}}>Resume</a></li>
                    </SpotlightIconRow>
                    
                    <Subheading>Exposure</Subheading>
                    <Content>My first experience with programming was when I tried learning R because I heard it was a useful tool for econometrics.
                    It didn’t take long before I wanted to turn my basic command line interface apps into something I could see and explore using point and click.
                    At the time, I couldn’t quite figure out how to build a web application using R but luckily for me I stumbled upon freecodecamp and I took the deep dive into web development.
                    </Content>
                    
                    <Subheading>Hello World</Subheading>
                    <Content>I had my “Hello World!” moment when I created my first web page - an Elon Musk tribute site in HTML/CSS and I was off and running from there on out.
                    I reached out to others in my local community and organized weekly meetups resulting in the revival of the Long Island freecodecamp meetup.
                    I was also active in the NYC freecodecamp meetups where I was able to learn a lot from more experienced engineers. 
                    </Content>

                    <Subheading>On the job</Subheading>
                    <Content>That summer I worked as a Software Developer at a local consulting firm.
                    In this role I utilized my frontend programming skills to build out user interfaces for a learning management software platform similar to Udemy.
                    This opportunity broadened my understanding of full stack development and using JIRA improved my experience working alongside other engineers.
                    </Content>

                    <Subheading>Data Science</Subheading>
                    <Content>When I returned to campus my economics peers were a little confused when I was hacking together (retro-looking at the time) web applications in between lectures.
                    At this time I made the switch from R to Python because I was drawn to the general usefulness of Python.
                    One time in econometrics class while the class was learning linear regression using Excel I was translating the professor’s steps into code so I would be able to clean data and run regressions in Python.
                    </Content>
                    
                    <Subheading>Stublink</Subheading>
                    <Content>While on campus, I recruited a classmate to join me in the shark tank style business competition.
                    During the semester we learned React, conducted market research and developed a pitch deck that won us first place at the competition.
                    That following summer we began development on an MVP mobile application.
                    Although Stublink came to an end at the end of the summer, the experience of owning a project from idea through development was a valuable learning experience.
                    </Content>

                    <Subheading>Research</Subheading>
                    <Content>When I returned to campus in the fall I was assigned to write an empirical paper using an econometric model.
                    I was curious about how an econometric model would measure up to a machine learning model.
                    I dove deep to find out and wrote my paper on transportation mode choice and compared the predictive accuracy of a logistic regression, support vector machine and a neural network.
                    My switch to Python paid off, I cleaned my data using Pandas and implemented my models using sklearn and Keras.
                    In the end, the machine learning models were more accurate in predicting the transportation mode used for traveling to work.
                    </Content>

                    <Subheading>CS Fundamentals</Subheading>
                    <Content>Since I was self taught, I wanted to make sure that I had my programming fundamentals down pat. 
                    During my last few semesters on campus I took a two part C++ sequence, a class in Data Structures, and a class in Algorithms in order to solidify my Computer Science fundamentals. 
                    Implementing Data Structures and Algorithms in C++ improved my understanding of memory management, time and space complexity, and showed me the benefits of strong typing.
                    </Content>

                    <Subheading>The Latest</Subheading>
                    <Content>Since then, I’ve been honing my skills and learning something new every day.
                    I developed Oasis, a web application that makes it easier to find restaurants that may have gluten free options.
                    I also developed C19Insights, a web-based dashboard for visualizing COVID-19 trends in the United States.
                    Both of these projects taught me a lot about bringing a project from an idea, through the development process and finally delivering the service to live users around the world.
                    </Content>

            </div>
        </Layout>
        </>
    )
}