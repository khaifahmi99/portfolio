import React from 'react';

function ListCard(props) {
  const { year, semester, units, scores } = props;

  return (
    <div className="col s12">
      <div className="card-panel white">
        <div className="row">
          <div className="col l3 s4">
            <h3 className="center-align">{year}</h3>
            <h6 className="center-align grey-text">{semester}</h6>
          </div>
          <div
            className="col l9 s8 left-align"
            style={{ borderLeft: '1px solid black' }}
          >
            <div className="row" style={{ paddingBottom: '10px' }}>
              <div className="col l6 s12">
                <p>
                  {units[0]}{' '}
                  <span
                    className="white-text green darken-2"
                    style={{
                      fontWeight: 'bold',
                      padding: '5px 10px',
                      marginLeft: '5px',
                      borderRadius: '5px',
                    }}
                  >
                    {scores[0]}
                  </span>
                </p>
              </div>
              <div className="col l6 s12">
                <p>
                  {units[1]}{' '}
                  <span
                    className="white-text green darken-2"
                    style={{
                      fontWeight: 'bold',
                      padding: '5px 10px',
                      marginLeft: '5px',
                      borderRadius: '5px',
                    }}
                  >
                    {scores[1]}
                  </span>
                </p>
              </div>
              <div className="col l6 s12 hide-on-large-only">
                <p>
                  {units[2]}{' '}
                  <span
                    className="white-text green darken-2"
                    style={{
                      fontWeight: 'bold',
                      padding: '5px 10px',
                      marginLeft: '5px',
                      borderRadius: '5px',
                    }}
                  >
                    {scores[2]}
                  </span>
                </p>
              </div>
              <div className="col l6 s12 hide-on-large-only">
                <p>
                  {units[3]}{' '}
                  <span
                    className="white-text green darken-2"
                    style={{
                      fontWeight: 'bold',
                      padding: '5px 10px',
                      marginLeft: '5px',
                      borderRadius: '5px',
                    }}
                  >
                    {scores[3]}
                  </span>
                </p>
              </div>
            </div>
            <div className="row hide-on-med-and-down">
              <div className="col l6 s12">
                <p>
                  {units[2]}{' '}
                  <span
                    className="white-text green darken-2"
                    style={{
                      fontWeight: 'bold',
                      padding: '5px 10px',
                      marginLeft: '5px',
                      borderRadius: '5px',
                    }}
                  >
                    {scores[2]}
                  </span>
                </p>
              </div>
              <div className="col l6 s12">
                <p>
                  {units[3]}{' '}
                  <span
                    className="white-text green darken-2"
                    style={{
                      fontWeight: 'bold',
                      padding: '5px 10px',
                      marginLeft: '5px',
                      borderRadius: '5px',
                    }}
                  >
                    {scores[3]}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
