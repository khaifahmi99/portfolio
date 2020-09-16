import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import ListCard from './ListCard';

import { useState } from 'react';

function Academics() {

    return(
        <div className="grey lighten-4">
            <Navbar />

            <div className="center-align">
                <h1 className="">Academics</h1>
            </div>
            <div>
                <div className="row">
                    <div className="col l3 hide-on-med-and-down right-align">
                        <br/>
                        <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="khaifahmi"><a class="LI-simple-link" href='https://au.linkedin.com/in/khaifahmi?trk=profile-badge'>Khai Fahmi Zaki</a></div>
                    </div>
                    <div className="col s12 l9">
                        <ListCard year="2019" semester="semester 2" units={["Unit 1", "Unit 2", "Unit 3", "Unit 4"]} scores={["100", "89", "90", "95"]} />
                        <ListCard year="2019" semester="semester 2" units={["Unit 1", "Unit 2", "Unit 3", "Unit 4"]} scores={["100", "89", "90", "95"]} />
                        <ListCard year="2019" semester="semester 2" units={["Unit 1", "Unit 2", "Unit 3", "Unit 4"]} scores={["100", "89", "90", "95"]} />
                        <ListCard year="2019" semester="semester 2" units={["Unit 1", "Unit 2", "Unit 3", "Unit 4"]} scores={["100", "89", "90", "95"]} />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Academics;