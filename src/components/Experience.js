import React from 'react';
import './Experience.css';
import { useInView } from 'react-intersection-observer';

const Experience = () => {

    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.1, // Trigger when 10% of the element is in view
        triggerOnce: true, // Run animation only once when the element is in view
    });
  
    const { ref: ref2, inView: inView2 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
  
    const { ref: ref3, inView: inView3 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { ref: ref4, inView: inView4 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { ref: ref5, inView: inView5 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section className="experience">
            <h2 className="experience-heading">Experience</h2>
            <div className="timeline">
        
                <div ref={ref1} className={`timeline-item ${inView1 ? 'fade-in-visible' : 'fade-in'}`}>
                    <div className="timeline-icon"></div>
                    <div className="timeline-content">
                        <h3>Major League Baseball</h3>
                        <p className='role'>Software Engineer Intern | June 2024 - September 2024</p>
                        <ul>
                            <li>
                            Independently developed a test automation project using Node JS and Playwright for MLB’s ticket sales website responsible for
                            generating over 8 figures in revenue
                            </li>
                            <li>
                            Refactored codebase from 7500+ lines to 250 for easier maintenance and readability
                            </li>
                            <li>
                            Developed 100+ end-to-end automation tests for multiple happy path scenarios ensuring full coverage
                            </li>
                            <li>
                            Leveraged parallel execution to run 20+ tests across QA and UAT environments in under 3 minutes, reducing manual testing time by
                            over 78.5%
                            </li>
                            <li>
                            Used a data driven approach for test cases with CSV files to streamline test case creation and improve readability of test case variables
                            </li>
                            <li>
                            Found multiple bugs in lower environments through a deep analysis of automation runs ensuring a stable production environment
                            </li>
                        </ul>
                    </div>
                </div>

                <div ref={ref2} className={`timeline-item ${inView2 ? 'fade-in-visible' : 'fade-in'}`}>
                    <div className="timeline-icon"></div>
                    <div className="timeline-content">
                        <h3>Major League Baseball</h3>
                        <p className='role'>Software Engineer Intern | June 2023 - December 2023</p>
                        <ul>
                            <li>
                            Automated over 80 end-to-end black box test cases, resulting in reduced test execution time and critical bugs released
                            </li>
                            <li>
                            Created a detailed documentation framework to enhance automation efforts by adding unique identifiers on the React front-end
website, simplifying XML locator accessibility for automation and QA engineers
                            </li>
                            <li>
                            Utilized Allure framework and Sauce Labs for generating reports of automated tests being executed
                            </li>
                            <li>
                            Conducted demos and trained software testers in Playwright automation
                            </li>
                        </ul>
                    </div>
                </div>

                <div ref={ref3} className={`timeline-item ${inView3 ? 'fade-in-visible' : 'fade-in'}`}>
                    <div className="timeline-icon"></div>
                    <div className="timeline-content">
                        <h3>UCI CubeSat</h3>
                        <p className='role'>Full Stack Software Engineer | October 2022 - September 2023</p>
                        <ul>
                            <li>
                            Worked as a full stack developer in a team of 5 to continue the development of a website to monitor satellite operations
                            </li>
                            <li>
                            Converted backend from Python to TypeScript and Express for maintainability
                            </li>
                            <li>
                            Conducted research about different databases and how their strengths and weaknesses align with the project
                            </li>
                            <li>
                            Created database schema and transitioned database from PostgreSQL to MySQL using PlanetScale and inserted mock data into the
database to test the full-stack website
                            </li>
                        </ul>
                    </div>
                </div>

                <div ref={ref4} className={`timeline-item ${inView4 ? 'fade-in-visible' : 'fade-in'}`}>
                    <div className="timeline-icon"></div>
                    <div className="timeline-content">
                        <h3>UCI ICSSC ZotMeal</h3>
                        <p className='role'>Software Developer | December 2022 - September 2023</p>
                        <ul>
                            <li>
                            Created a new feature to scrape and pull menu data from the UCI Dining website a week in advance and format it
                            </li>
                            <li>
                            Worked on automatically running the script once every day through Amazon AWS
                            </li>
                        </ul>
                    </div>
                </div>

                <div ref={ref5} className={`timeline-item ${inView5 ? 'fade-in-visible' : 'fade-in'}`}>
                    <div className="timeline-icon"></div>
                    <div className="timeline-content">
                        <h3>UCI ICS Lab</h3>
                        <p className='role'>Lab Tutor | September 2022 - January 2023</p>
                        <ul>
                            <li>
                            Coordinated with a Teaching Assistant to assist 50+ students in an introductory programming class in Python
                            </li>
                            <li>
                            Answered questions about programming concepts and code debugging and proctored tests
                            </li>
                            <li>
                            Taught fundamental programming concepts such as control structures, basic data structures, functions, and classes
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
