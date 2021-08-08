import { Event, Timeline } from 'react-timeline-scribble';

import React from 'react';
import Typing from 'react-typing-animation';

const EducationTimeline = () => {
  return (
    <div className="left-align container">
      <Typing>
        <h3 style={{ fontFamily: 'Montserrat' }}>Education</h3>
        <Typing.Delay ms={1000000} />
      </Typing>
      <Timeline>
        <Event
          interval={'2018 – 2021'}
          title={'Bachelor in Computer Science (Data Science and IoT major)'}
          subtitle={'Swinburne University of Technology | CGPA: 4.0'}
        >
          Currently in 3rd year of the programme while maintaining a CGPA of 4.0
          and weighted average mark (WAM) of 88.00% after taking 16 subjects in
          2 years. Majoring in Data Science and Internet of Things (IoT) while
          introduced to other units in Web/Mobile application development, cloud
          computing, data structures, network and security. Expected to graduate
          in July 2021.
        </Event>
        <Event
          interval={'2017 – 2018'}
          title={'Monash University Foundation Year'}
          subtitle={'Monash University | MUFY Score: 89%'}
        >
          {`Achieved an Australian Matriculation Score of 89.00% for the Monash University Foundation Year programme offered 
                by Monash University at Sunway College, KL. This programme is part of the requirements to pursue the bachelor programme 
                in Australia. Subjects taken include Information Technology, Advanced Mathematics, English and Mathematics and was
                awarded the 'High Achiever' award at the end of the programme.`}
        </Event>
      </Timeline>
    </div>
  );
};

export default EducationTimeline;
