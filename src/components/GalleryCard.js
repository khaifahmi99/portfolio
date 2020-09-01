import React from 'react';

function GalleryCard(props) {

    const { gallery } = props;

    function convertSecondsToDate(seconds) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const date = new Date(seconds * 1000); // pass milliseconds to date object
        return monthNames[date.getMonth()] + ', ' + date.getFullYear();
    }

    return (
        <div className="col s12 m6">
            <div className="card">
                <div className="card-image">
                    <img src={gallery.urls[Math.floor(Math.random() * gallery.urls.length)]} />
                    {console.log(Math.floor(Math.random() * gallery.urls.length))}
                </div>
                <div className="card-fab">
                </div>
                <div className="card-content left-align">
                    <a href={'/gallery/' + gallery.id} className="btn-floating waves-effect waves-light black right"><i className="material-icons">arrow_forward</i></a>
                    <span className="card-title">{gallery.title}</span>
                    <p><i class="fa fa-calendar-o" aria-hidden="true"></i> {convertSecondsToDate(gallery.ts.seconds)}</p>
                    <p> <i class="fa fa-map-marker" aria-hidden="true"></i> {gallery.location}</p>

                </div>
            </div>
      </div>
    )
}

export default GalleryCard;