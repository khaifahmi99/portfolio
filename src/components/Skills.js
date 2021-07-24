import React, { useState } from 'react';

import ReactWordcloud from 'react-wordcloud';
import Typing from 'react-typing-animation';
import CanvasJSReact from '../lib/canvasjs.react';

function Skills() {
  const [view, setView] = useState('wordcloud');
  const words = [
    { text: 'Data Science', value: 64 },
    { text: 'Internet of Things', value: 20 },
    { text: 'IoT', value: 55 },
    { text: 'AWS', value: 50 },
    { text: 'Amazon Web Service', value: 24 },
    { text: 'Cloud', value: 40 },
    { text: 'Android', value: 35 },
    { text: 'React.js', value: 30 },
    { text: 'MySQL', value: 24 },
    { text: 'Database', value: 35 },
    { text: 'DynamoDB', value: 40 },
    { text: 'Machine Learning', value: 55 },
    { text: 'Python', value: 64 },
    { text: 'Flask', value: 30 },
    { text: 'Heroku', value: 18 },
    { text: 'Git', value: 20 },
    { text: 'Arduino', value: 24 },
    { text: 'Mobile App', value: 30 },
    { text: 'Web App', value: 50 },
    { text: 'Javascript', value: 34 },
    { text: 'Computer Vision', value: 43 },
    { text: 'AWS Lambda', value: 32 },
    { text: 'Jenkins', value: 22 },
    { text: 'CI/CD', value: 34 },
    { text: 'DevOps', value: 30 },
    { text: 'Google Cloud', value: 14 },
    { text: 'Firebase', value: 24 },
    { text: 'GCP', value: 32 },
    { text: 'Microsoft Azure', value: 25 },
    { text: 'Data Analytics', value: 35 },
    { text: 'Ruby', value: 24 },
    { text: 'Unity', value: 23 },
    { text: 'C#', value: 20 },
    { text: 'Object Oriented Programming', value: 14 },
    { text: 'OOP', value: 34 },
    { text: 'EC2', value: 35 },
    { text: 'API', value: 45 },
    { text: 'ESP8266', value: 24 },
    { text: 'MongoDB', value: 24 },
    { text: 'Alexa Skills Kit', value: 48 },
    { text: 'Google Maps', value: 30 },
    { text: 'IOS', value: 36 },
    { text: 'Procedural Programming', value: 20 },
    { text: 'Materialize CSS', value: 39 },
    { text: 'PHP', value: 44 },
    { text: 'Amazon Rekognition', value: 44 },
    { text: 'AWS Deep Racer', value: 30 },
    { text: 'GAN', value: 29 },
    { text: 'Linux', value: 34 },
    { text: 'Ubuntu', value: 24 },
    { text: 'Network', value: 24 },
    { text: 'Research', value: 35 },
    { text: 'Security', value: 20 },
    { text: 'Firewall', value: 18 },
    { text: 'Switch', value: 24 },
    { text: 'Router', value: 27 },
    { text: 'Data Science', value: 24 },
    { text: 'Java', value: 44 },
    { text: 'HTML', value: 30 },
    { text: 'OS', value: 38 },
    { text: 'TDD', value: 44 },
    { text: 'Unit Test', value: 39 },
    { text: 'Statistics', value: 44 },
    { text: 'Slack', value: 45 },
    { text: 'Smart Home', value: 24 },
    { text: 'Smart City', value: 25 },
    { text: 'Time-Series', value: 35 },
    { text: 'Data Visualisation', value: 38 },
    { text: 'D3.js', value: 28 },
    { text: 'Plotly', value: 32 },
    { text: 'Matplotlib', value: 44 },
    { text: 'Pandas', value: 36 },
    { text: 'Numpy', value: 34 },
    { text: 'Sklearn', value: 43 },
    { text: 'Sass', value: 24 },
    { text: 'MQTT', value: 32 },
    { text: 'Raspberry Pi', value: 26 },
    { text: 'Node Red', value: 24 },
    { text: 'Express', value: 24 },
    { text: 'Node.js', value: 32 },
    { text: 'NLP', value: 46 },
    { text: 'Natural Language Processing', value: 24 },
    { text: 'NLTK', value: 32 },
    { text: 'Spacy', value: 34 },
    { text: 'Keras', value: 43 },
  ];

  const CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const options = {
    title: {
      text: '',
    },
    axisX: {
      labelFontColor: '#fff',
      lineColor: '#000',
      gridThickness: 0,
    },
    axisY: {
      labelFontColor: '#000',
      lineColor: '#000',
      gridThickness: 0,
    },
    toolTip: {
      enabled: false,
    },
    backgroundColor: 'black',
    data: [
      {
        type: 'bar',
        dataPoints: [
          { label: 'Project Management', y: 25 },
          { label: 'Database Management', y: 28 },
          { label: 'Mobile Development', y: 30 },
          { label: 'Cloud Computing', y: 40 },
          { label: 'Web Development', y: 45 },
          { label: 'Internet of Things', y: 45 },
          { label: 'Machine Learning', y: 50 },
        ],
      },
    ],
  };

  function toggleView() {
    if (view === 'wordcloud') {
      setView('charts');
    } else {
      setView('wordcloud');
    }
  }

  if (view === 'wordcloud') {
    return (
      <div className="black white-text">
        <div className="container">
          <Typing>
            <h3
              className="left-align"
              style={{ paddingTop: '64px', fontFamily: 'Montserrat' }}
            >
              Technical Skills
            </h3>
            <Typing.Delay ms={1000000} />
          </Typing>
          <div className="right-align">
            <button className="btn white black-text" onClick={toggleView}>
              Change View
            </button>
          </div>
        </div>
        <div>
          <ReactWordcloud
            options={{
              rotations: 1,
              rotationAngles: [0, 0],
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
            }}
            words={words}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="white-text black">
      <div className="container">
        <Typing>
          <h3
            className="left-align"
            style={{ paddingTop: '64px', fontFamily: 'Montserrat' }}
          >
            Technical Skills
          </h3>
          <Typing.Delay ms={1000000} />
        </Typing>
        <div className="right-align">
          <button className="btn white black-text" onClick={toggleView}>
            Change View
          </button>
        </div>
        <br />
        <br />
        <CanvasJSChart options={options} />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Skills;
