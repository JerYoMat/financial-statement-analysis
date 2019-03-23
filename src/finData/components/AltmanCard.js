import React from 'react';
import AltmanZScoreChart from './AltmanZScoreChart';

function AltmanCard({ zScore, cData, cOptions, companyName, peerName, coSeries, peerSeries }) {
  const ary = ['A', 'B', 'C', 'D', 'E']

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
              <th />
              <th scope="col">{companyName}</th>
              <th scope="col">{peerName}</th>
            </tr>
          </thead>
          <tbody>
            {coSeries.map((value, index) => 
              <tr key={index}>
                <th scope='row'>{ary[index]}</th> 
                <td>{value.toFixed(2)}</td>
                <td>{peerSeries[index].toFixed(2)}</td>
              </tr>
            )}   
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}



export default AltmanCard;
//<p className="card-title">Altman Z-Score: {zScore}</p>