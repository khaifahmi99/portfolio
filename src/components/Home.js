import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Banner from './Banner';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="main">
                    <Banner />
                </div>
                <Footer />
            </div>
        )
    }

}