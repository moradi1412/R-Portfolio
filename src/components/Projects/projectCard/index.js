import React from 'react';

function ProjectCards(props) {
    return (
        <div className="card">
            <div className="row">
                <div className="col img-container">
                        <img alt={props.name} src={props.image} />
                </div>
                <div className="col">
                        <p className="card-title">{props.name}</p>
                        <p class="topics">
                            {props.topics}
                        </p>
                        <p class="links">
                            <a href={props.github}><i className="icon ion-social-github"></i></a>
                            <a href={props.deploy}> {props.deploy} </a>
                        </p>

                </div>
            </div>

        </div>
    );
}

export default ProjectCards;