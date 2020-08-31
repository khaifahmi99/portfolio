import React from 'react';

function GalleryCard(props) {

    const { gallery } = props;

    return (
        <div className="col s12 l6">
            <div className="card">
                <div className="card-image">
                    <img src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg" />
                </div>
                <div className="card-fab">
                </div>
                <div className="card-content left-align">
                    <a className="btn-floating waves-effect waves-light black right"><i className="material-icons">arrow_forward</i></a>
                    <span className="card-title">{gallery.title}</span>
                    <p><i class="fa fa-calendar-o" aria-hidden="true"></i> {gallery.ts.seconds}</p>
                    <p> <i class="fa fa-map-marker" aria-hidden="true"></i> {gallery.location}</p>

                </div>
            </div>
      </div>
    )
}

export default GalleryCard;