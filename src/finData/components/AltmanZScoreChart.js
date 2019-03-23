import React from 'react';
import { Radar } from 'react-chartjs-2';

function AltmanZScoreChart({ cData, cOptions }) {
  return <Radar data={cData} options={cOptions}/>
}

export default AltmanZScoreChart; 


