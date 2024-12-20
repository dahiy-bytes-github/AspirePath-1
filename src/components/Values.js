import React from "react";
import "../styles/AboutPage.css";

function Values() {
  return (
      <div className="section">
        <h2 className="ui centered header">Our Values</h2>
        <ul className="ui content">
          <li className="ui header">
            <strong>Excellence: </strong>Striving for excellence in mentorship,
            providing exceptional guidance, and consistently delivering
            high-quality support to mentees. AspirePath values excellence in
            every aspect of its operations, aiming to exceed expectations and
            drive meaningful results.
          </li>
          <br></br>
          <li className="ui header">
            <strong>Empathy: </strong>Fostering a culture of empathy and
            understanding towards the needs, challenges, and aspirations of
            mentees. AspirePath recognizes the importance of empathy in building
            strong mentor-mentee relationships and creating a supportive
            environment for growth and development.
          </li>
          <br></br>
          <li className="ui header">
            <strong>Collaboration: </strong>Promoting collaboration among
            mentors, mentees, and stakeholders to foster a sense of community
            and facilitate knowledge sharing. AspirePath encourages an inclusive
            and collaborative approach, recognizing that collective efforts and
            diverse perspectives lead to greater innovation and success.
          </li>
          <br></br>
          <li className="ui header">
            <strong>Impact: </strong>Striving to make a positive and
            meaningful impact on the lives of mentees, companies, and the
            broader community. AspirePath is driven by the desire to empower
            individuals, drive growth, and contribute to positive change in the
            professional and educational landscape.
          </li>
        </ul>
      </div>
  );
}

export default Values;