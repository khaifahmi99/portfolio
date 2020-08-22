import React from 'react';

import Tags from './Tags';

function Card(props) {

    const { project } = props;

    return (
        <div className="col s12 m6">
            <div className="card grey darken-4 white-text">
                <div className="card-content left-align">
                    <span className="card-title">{project.name}</span>
                    <span>{project.endYear}</span>
                    <p>{project.shortDescription}</p>
                    <br/>
                    {project.tags.length > 0 && project.tags.map(tag => <Tags text={tag} att="purple darken-2 white-text" />)}
                </div>
                <div className="card-action left-align">
                    <a href={'/project/' + project.id} className="white-text">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Card;