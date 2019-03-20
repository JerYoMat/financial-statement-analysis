import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';

  const A = ((304046000.0 - 61391000.0)/947361000.0);
  const B = (33767000.0/947361000.0);
  const C = (70482000.0/947361000.0);
  const D = 2320000000 / 196739000.0;
  const E = 518920000.0 / 947361000.0;
  const zScore = (1.2*A + 1.4*B + 3.3*C + 0.6*D + 1.0*E);

 

function AltmanZScore(props) {
  return (
    <div>
      <h2>Altman Z-Score:{zScore}</h2>
      <Radar data={props.data} />
    </div>
  )
}


export default AltmanZScore;


/*Z-Score = 1.2A + 1.4B + 3.3C + 0.6D + 1.0E
2320000000


Where:

A = working capital / total assets

B = retained earnings / total assets

C = earnings before interest and tax / total assets

D = market value of equity / total liabilities

E = sales / total assets */