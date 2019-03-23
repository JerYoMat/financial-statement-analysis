import React from 'react';
import AltmanZScoreChart from './AltmanZScoreChart';

function AltmanCard({ zScore, cData, cOptions, companyName }) {
  return (
    <div className="card col-md-8">
      <div className='row'>
        <div className='col-md-8'>
          <AltmanZScoreChart cData={cData} cOptions={cOptions} />
          <div>Altman Z-Score:{zScore.toFixed(2)}</div>
        </div>
        
        <div className='col-md-4'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">{companyName}</th>
              <th scope="col">IND</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">0.23</th>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">0.55</th>
              <td>Jacob</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default AltmanCard;
//<p className="card-title">Altman Z-Score: {zScore}</p>