import React, { useState } from 'react';

import Tags from './Tags';
import ProjectsPage from './ProjectsPage';

function Card(props) {

    const { project } = props;

    return (
        <div class="col s12 m6">
            <div class="card darken-1">
                <div class="card-content">
                    <span class="card-title">{project.name}</span>
                    <p>{project.shortDescription}</p>
                    <br/>
                    {project.tags.length > 0 && project.tags.map(tag => <Tags text={tag} att="purple darken-2 white-text" />)}
                </div>
                <div class="card-action">
                    <a href="#" className="grey-text text-darken-1">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Card;