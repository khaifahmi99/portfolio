import React, { useState, useEffect, useRef } from 'react';
import Gallery from 'react-grid-gallery';

import Navbar from './Navbar';
import Footer from './Footer';

import db from './Firebase/firebase';

function SingleGalleryPage(props) {

    const { id } = props.match.params;

    const [loading, setLoading] = useState(true);
    const [gallery, setGallery] = useState({});
    const [images, setImages] = useState([]);

    const galleryObj = useRef(null);

    useEffect(() => {
        async function formatImages(gallery) {
            gallery.urls.forEach((url) => {
                const img = {
                    src: url,
                    thumbnail: url,
                    thumbnailWidth: 320,
                    thumbnailHeight: 212,
                }
                setImages(images => [...images, img])
            })
        }

        async function getData() {
            try {
                await db.collection('gallery').doc(id)
                    .get()
                    .then((doc) => {
                        setGallery(doc.data());
                        formatImages(doc.data());
                        setLoading(false);
                    })
            } catch (e) {
                console.log('Single Gallery Page: Error in fetching gallery in db');
            }
        }
        getData();
    }, [])

    function convertSecondsToDate(seconds) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const date = new Date(seconds * 1000); // pass milliseconds to date object
        return monthNames[date.getMonth()] + ', ' + date.getFullYear();
    }

    if (loading) {
        return (
            <div>
                <Navbar />

                <div className="container center-align">
                    <h1 className="center-align">Gallery</h1>
                    <h2>Loading...Fetching Data from Database</h2>
                </div>

                <Footer />
            </div>  
        )      
    } else if (!loading) {
        return(
            <div>
                <Navbar />
    
                <div className="container">
                    <h1 className="center-align">Gallery</h1>
    
                    <h2>{gallery.title}</h2>
                    <p><i class="fa fa-calendar-o" aria-hidden="true"></i> {convertSecondsToDate(gallery.ts.seconds)}</p>
                    <p> <i class="fa fa-map-marker" aria-hidden="true"></i> {gallery.location}</p>

                    <div className="white" style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    border: "1px solid #ddd",
                    overflow: "auto"}}>
                        <Gallery images={images} ref={galleryObj} showLightboxThumbnails={true}/>
                    </div>
                    <br/>
                    <div className="center-align">
                        <a href="/galleries" className="btn black white-text">Return to Galleries</a>
                    </div>
                    <br/><br/>
                </div>
                <Footer />
            </div>
        );
    }
}

export default SingleGalleryPage;