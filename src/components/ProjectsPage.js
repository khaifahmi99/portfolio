import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Typing from 'react-typing-animation';

import db from './Firebase/firebase';

/* eslint-disable */
import Card from './Card';
import Footer from './Footer';
import Navbar from './Navbar';

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const temp = [];
      try {
        await db
          .collection('projects')
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const proj = doc.data();
              proj.id = doc.id;
              temp.push(proj);
            });
          });
      } catch (e) {
      } finally {
        setProjects(temp);
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="container center-align">
          <h1 style={{ fontFamily: 'Montserrat' }}>Projects</h1>
          <div className="row">
            {[...Array(4)].map((num) => (
              <div key={num} className="col s12 l6">
                <div className="card large grey lighten-1 white-text">
                  <div className="card-content left-align">
                    <span className="card-title">
                      {<Skeleton width={400} />}
                    </span>
                    <span>{<Skeleton width={200} />}</span>
                    <p>{<Skeleton count={6} />}</p>
                    <br />
                    <span>{<Skeleton width={300} />}</span>
                  </div>
                  <div className="card-action left-align">
                    <button className="white-text">
                      {<Skeleton width={200} style={{ padding: '4px' }} />}
                    </button>
                  </div>
                </div>
                <br />
                <br />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  } else if (!loading) {
    return (
      <div>
        <Navbar />
        <div className="center-align">
          <Typing>
            <h1 style={{ fontFamily: 'Montserrat' }}>PROJECTS</h1>
            <Typing.Delay ms={1000000000} />
          </Typing>
          <div className="container">
            <div className="row">
              {projects.length > 0 &&
                projects.map((project, i) => (
                  <Card
                    id={`project-${i + 1}`}
                    key={project}
                    project={project}
                  />
                ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProjectsPage;
