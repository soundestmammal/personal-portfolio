import React from 'react';
import '../styles/style.css';

const MyWork = () => {
    function openTabInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
    return (
        <section className="my-work">
            <h2 className="section__title section__title--work">My Projects</h2>
            <p className="section__subtitle section__subtitle--work"></p>
            <div className="portfolio_2">
                <div className="card"  style={{ backgroundImage: "url(https://imgix.datadoghq.com/img/careers/careers_pattern_tech-solutions.png?auto=format)" }}>
                    <div className="card-content">
                        <div className="project-content">
                            <h2 className="project-title">Oasis</h2>
                            <p className="project-description">Oasis is a data driven service to identify restaurants that provide safe gluten-free options.</p>
                        </div>
                        <div className="button-container">
                            <div className="project-button" onClick={() => openTabInNewTab("https://www.oasisglutenfree.com")}>View Project</div>
                            <div className="project-button" onClick={() => openTabInNewTab("https://www.github.com/soundestmammal/oasis")}>View Code</div>
                        </div>
                    </div>
                </div>
                <div className="card" style={{ backgroundImage: "url(https://imgix.datadoghq.com/img/careers/careers_pattern_marketing.png?auto=format)" }}>
                    <div className="card-content">
                        <div className="project-content">
                            <h2 className="project-title">COVID-19 Insights</h2>
                            <p className="project-description">An interactive dashboard to visualize COVID-19 trends in the United States.</p>
                        </div>
                        <div className="button-container">
                            <div className="project-button" onClick={() => openTabInNewTab("https://www.c19insights.io")}>View Project</div>
                            <div className="project-button" onClick={() => openTabInNewTab("https://www.github.com/soundestmammal/covid19insights")}>View Code</div>
                        </div>
                    </div>
                </div>
                <div className="card" style={{ backgroundImage: "url(https://imgix.datadoghq.com/img/careers/careers_pattern_sales.png?auto=format)" }}>
                    <div className="card-content">
                            <div className="project-content">
                                <h2 className="project-title">Vehicle Ownership</h2>
                                <p className="project-description">Data science project that explores the determinants of vehicle ownership in the NY Metro Area using discrete choice modeling.</p>
                            </div>
                            <div className="button-container">
                                <div className="project-button" onClick={() => openTabInNewTab("https://github.com/soundestmammal/Senior_Thesis/blob/master/Capstone_Project_Version_0-2.pdf")}>View Project</div>
                                <div className="project-button" onClick={() => openTabInNewTab("https://www.github.com/soundestmammal/Senior_Thesis")}>View Code</div>
                            </div>
                    </div>
                </div>                
                <div className="card" style={{ backgroundImage: "url(https://imgix.datadoghq.com/img/careers/careers_pattern_GA.png?auto=format)" }}>
                    <div className="card-content">
                            <div className="project-content">
                                <h2 className="project-title">Mode Choice</h2>
                                <p className="project-description">A comparision of three different models Logisic Regression, Support Vector Machine, and Neural Network to predict how people travel to work.</p>
                            </div>
                            <div className="button-container">
                                <div className="project-button" onClick={() => openTabInNewTab("https://github.com/soundestmammal/Mode_Choice/blob/master/Mode_Choice_Paper.pdf")}>View Project</div>
                                <div className="project-button" onClick={() => openTabInNewTab("https://github.com/soundestmammal/Mode_Choice")}>View Code</div>
                            </div>
                    </div>
                </div>                
                <div className="card" style={{ backgroundImage: "url(https://imgix.datadoghq.com/img/careers/careers_pattern_OS.png?auto=format)" }}>
                    <div className="card-content">
                            <div className="project-content">
                                <h2 className="project-title">Dynamic Vehicle Model</h2>
                                <p className="project-description">Vehicle accepts throttle input and steps through longitudinal dynamic equations.</p>
                            </div>
                            <div className="button-container">
                                <div className="project-button" onClick={() => openTabInNewTab("https://github.com/soundestmammal/dynamic-vehicle-modeling")}>View Project</div>
                                <div className="project-button" onClick={() => openTabInNewTab("https://github.com/soundestmammal/dynamic-vehicle-modeling")}>View Code</div>
                            </div>
                    </div>
                </div>                
                <div className="card" style={{ backgroundImage: "url(https://imgix.datadoghq.com/img/careers/careers_pattern_engineering.png?auto=format)" }}>
                    <div className="card-content">
                            <div className="project-content">
                                <h2 className="project-title">NYC Real Estate</h2>
                                <p className="project-description">How much more money are people willing to pay to be near a subway stop?</p>
                            </div>
                            <div className="button-container">
                                <div className="project-button" onClick={() => openTabInNewTab("https://github.com/soundestmammal/econometrics_spring_2018/blob/master/Econometrics_Paper_V0-02.pdf")}>View Project</div>
                                <div className="project-button" onClick={() => openTabInNewTab("https://github.com/soundestmammal/econometrics_spring_2018")}>View Code</div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyWork;