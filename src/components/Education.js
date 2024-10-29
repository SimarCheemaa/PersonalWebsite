import React from 'react';
import './Education.css';
import { useInView } from 'react-intersection-observer';

const Education = () => {

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
        

  return (
    <section className="education">
      <h2 className="education-heading">Education</h2>
      <div className="timeline">

        <div ref={ref1} className={`timeline-item ${inView1 ? 'fade-in-visible' : 'fade-in'}`}>
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>University of California, Irvine</h3>
            <p><em>Bachelor's Degree | 2021-2024</em></p>
            <p><strong>Major:</strong> Computer Science</p>
            <p><strong>GPA:</strong> 3.91</p>
            <p><strong>Relevant coursework:</strong> Design and Analysis of Algorithms, Probability & Random Variables, Machine Learning, Introduction to Algorithms, Linear Algebra</p>
          </div>
        </div>

        <div ref={ref2} className={`timeline-item ${inView2 ? 'fade-in-visible' : 'fade-in'}`}>
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>San Joaquin Delta College</h3>
            <p><em>Dual Enrollment | 2020-2021</em></p>
            <p><strong>GPA:</strong> 4.0</p>
            <p>Graduated with 24 college credits including classes such as Calculus II and Macro / Micro Economics</p>
          </div>
        </div>

        <div ref={ref3} className={`timeline-item ${inView3 ? 'fade-in-visible' : 'fade-in'}`}>
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>Mountain House High School</h3>
            <p><em>High School Diploma | 2019-2021</em></p>
            <p><strong>GPA:</strong> 4.0 | 4.55 Weighted</p>
            <p><strong>Awards:</strong> President's Education Award from the Secretary of Education, Maximus Award, Academic Block Letter, Scholar Athlete, San Joaquin County Honor Roll</p>
            <p>- Founder and Vice President of Sikh Honors and Service Society (Jakara)</p>
            <p>- Distributed thousands of essential supplies [such as Masks and Sanitizers] to frontline workers during the
            Covid Pandemic through Sikhs for Humanity and Sikhs of Mountain House</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

