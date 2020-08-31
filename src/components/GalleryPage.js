import React, { useEffect, useState } from 'react';
import Gallery from 'react-grid-gallery';

import Navbar from './Navbar';
import Footer from './Footer';
import GalleryCard from './GalleryCard';

import db from './Firebase/firebase';

function GalleryPage() {

    const [galleryArray, setGalleryArray] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getGallery() {
            const temp = []
            try {
                await db.collection('gallery')
                    .get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            const gallery = doc.data();
                            gallery['id'] = doc.id;
    
                            temp.push(gallery);
                        })
                    }
                )
            } catch(e) {
                console.log('Gallery Page: Error in fetching data from firestore');
            } finally {
                setGalleryArray(temp);
                setLoading(false);
            }
        };
        getGallery();
    }, [])

    if (loading) {
        return (
            <div className="grey darken-4 white-text">
                <Navbar />
                <div className="container center-align">
                    <h1>Gallery</h1>
                    <h2>Loading...Fetching data from database</h2>
                </div>
                <br/>
                <Footer />
            </div>            
        )
    } else if (!loading) {
        return(
            <div className="grey darken-4">
                <Navbar />
                <div className="container center-align">
                    <h1 className="white-text">Gallery</h1>
                    <div className="row">
                    {galleryArray.length > 0 && galleryArray.map(gallery => <GalleryCard gallery={gallery}/>)}
                    </div>
                </div>
                <br/>
                <Footer />
            </div>
        )
    }
}

export default GalleryPage;