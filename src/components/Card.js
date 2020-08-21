import React from 'react';

import Tags from './Tags';
import ProjectsPage from './ProjectsPage';

function Card(props) {

    const { project } = props;

    return (
        <div className="col s12 m6">
            <div className="card darken-1">
                <div className="card-content">
                    <span className="card-title">{project.name}</span>
                    <p>{project.shortDescription}</p>
                    <br/>
                    {project.tags.length > 0 && project.tags.map(tag => <Tags text={tag} att="purple darken-2 white-text" />)}
                </div>
                <div className="card-action">
                    <a href="#" className="grey-text text-darken-1">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Card;