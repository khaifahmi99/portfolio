import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Banner from './Banner';
import EducationTimeline from './EducationTimeline';
import Skills from './Skills';
import Experience from './Experience';
import RecentProjects from './RecentProjects';

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
                    <EducationTimeline />
                    <Skills />
                    <Experience />
                    <RecentProjects />
                </div>
                <Footer />
            </div>
        )
    }

}