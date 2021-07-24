import React from 'react';

import Tags from './Tags';

function Card(props) {
  const { project } = props;

  return (
    <div className="col s12 l6">
      <div className="card large grey darken-4 white-text hoverable">
        <div className="card-content left-align">
          <span className="card-title" style={{ fontFamily: 'Montserrat' }}>
            {project.name}
          </span>
          <span style={{ fontFamily: 'Montserrat' }}>{project.endYear}</span>
          <p>{project.shortDescription}</p>
          <br />
          {project.tags.length > 0 &&
            project.tags.map((tag) => (
              <Tags key={tag} text={tag} att="purple darken-2 white-text" />
            ))}
        </div>
        <div className="card-action left-align">
          <a
            href={`/project/${project.id}`}
            className="white-text"
            style={{ fontFamily: 'Montserrat' }}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
