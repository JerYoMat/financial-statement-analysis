import React from 'react';
import AltmanZScoreChart from './AltmanZScoreChart';

function AltmanCard({ zScore, cData, cOptions }) {
  return (
    <div className="card col-md-5">
      <h5 className="card-title">Altman Z-Score: {zScore}</h5>
        <AltmanZScoreChart cData={cData} cOptions={cOptions} />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
    </div>
  );
}

export default AltmanCard;
