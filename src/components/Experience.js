import React from "react";
import "./Experience.css";
import { useInView } from "react-intersection-observer";

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

  const { ref: ref6, inView: inView6 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="experience">
      <h2 className="experience-heading">Experience</h2>
      <div className="timeline">
        <div
          ref={ref1}
          className={`timeline-item ${inView1 ? "fade-in-visible" : "fade-in"}`}
        >
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>Major League Baseball</h3>
            <p className="role">
              Software Test Engineer | January 2025 - Present
            </p>
            <ul>
              <li>
                Leading test automation, AI-driven quality assurance, and CI/CD
                integration to ensure seamless software deployment at MLB
              </li>
              <li>
                Preemptively automated feature testing using GenAI, reducing
                post-release defects and improving code stability
              </li>
              <li>
                Developed and deployed a CI/CD-driven automation suite with
                GitHub Actions, streamlining test execution across multiple
                environments
              </li>
              <li>
                Migrated legacy Selenium tests to Playwright, improving
                execution speed and reducing maintenance overhead
              </li>
              <li>
                Led regression testing for Apple Pay integration, uncovering
                high-severity bugs before they could impact thousands of users
              </li>
              <li>
                Automating new features before development, shifting testing
                left to catch defects early and enhance software reliability
              </li>
            </ul>
          </div>
        </div>

        <div
          ref={ref2}
          className={`timeline-item ${inView2 ? "fade-in-visible" : "fade-in"}`}
        >
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>Major League Baseball</h3>
            <p className="role">
              Software Engineer Intern  |  June 2024 - September 2024
            </p>
            <ul>
              <li>
                Designed and implemented high-impact test automation solutions
                to support MLB’s ticketing system, responsible for 8-figure
                revenue.
              </li>
              <li>
                Built a full-stack test automation project using Node.js and
                Playwright, increasing test coverage for critical workflows
              </li>
              <li>
                Refactored a 7,500+ line codebase to just 250 lines, improving
                readability and maintainability
              </li>
              <li>
                Developed 100+ end-to-end tests, ensuring robust automation
                coverage for revenue-driving features
              </li>
              <li>
                Optimized parallel test execution, reducing manual testing time
                by 78.5% per test case
              </li>
              <li>
                Uncovered critical bugs in lower environments, preventing costly
                production issues
              </li>
              <li>
                Designed a data-driven test strategy using CSV-based test
                inputs, improving flexibility and scalability of automation
              </li>
            </ul>
          </div>
        </div>

        <div
          ref={ref3}
          className={`timeline-item ${inView3 ? "fade-in-visible" : "fade-in"}`}
        >
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>Major League Baseball</h3>
            <p className="role">
              Software Engineer Intern | June 2023 - December 2023
            </p>
            <ul>
              <li>
                Strengthened MLB’s test automation infrastructure, optimizing
                efficiency and improving front-end testability
              </li>
              <li>
                Automated 80+ end-to-end black-box test cases, significantly
                reducing manual testing time
              </li>
              <li>
                Enhanced test automation architecture by introducing unique
                React element identifiers, simplifying maintenance
              </li>
              <li>
                Developed test reporting solutions using Allure and Sauce Labs,
                improving test visibility and debugging
              </li>
              <li>
                Led Playwright training sessions for QA engineers, accelerating
                team adoption of automated testing
              </li>
              <li>
                Collaborated with front-end engineers to resolve UI
                inconsistencies and improve React component testability
              </li>
            </ul>
          </div>
        </div>

        <div
          ref={ref4}
          className={`timeline-item ${inView4 ? "fade-in-visible" : "fade-in"}`}
        >
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>UCI CubeSat</h3>
            <p className="role">
              Full Stack Software Engineer | October 2022 - September 2023
            </p>
            <ul>
              <li>
                Worked as a full stack developer in a team of 5 to continue the
                development of a website to monitor satellite operations
              </li>
              <li>
                Converted backend from Python to TypeScript and Express for
                maintainability
              </li>
              <li>
                Conducted research about different databases and how their
                strengths and weaknesses align with the project
              </li>
              <li>
                Created database schema and transitioned database from
                PostgreSQL to MySQL using PlanetScale and inserted mock data
                into the database to test the full-stack website
              </li>
            </ul>
          </div>
        </div>

        <div
          ref={ref5}
          className={`timeline-item ${inView5 ? "fade-in-visible" : "fade-in"}`}
        >
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>UCI ICSSC ZotMeal</h3>
            <p className="role">
              Software Developer | December 2022 - September 2023
            </p>
            <ul>
              <li>
                Created a new feature to scrape and pull menu data from the UCI
                Dining website a week in advance and format it
              </li>
              <li>
                Worked on automatically running the script once every day
                through Amazon AWS
              </li>
            </ul>
          </div>
        </div>

        <div
          ref={ref6}
          className={`timeline-item ${inView6 ? "fade-in-visible" : "fade-in"}`}
        >
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>UCI ICS Lab</h3>
            <p className="role">Lab Tutor | September 2022 - January 2023</p>
            <ul>
              <li>
                Coordinated with a Teaching Assistant to assist 50+ students in
                an introductory programming class in Python
              </li>
              <li>
                Answered questions about programming concepts and code debugging
                and proctored tests
              </li>
              <li>
                Taught fundamental programming concepts such as control
                structures, basic data structures, functions, and classes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
