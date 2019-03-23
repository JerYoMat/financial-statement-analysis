import React, { Component } from 'react';
import AltmanCard from './components/AltmanCard';
import { altmanKeys } from '../general/keyArrays';
import calculateAltmanZScores from './components/calculateAltmanZScores';
import standardizeData from '../general/standardizeData'
import {chartData, chartOptions} from './components/chartConfig';
import filterStdData from '../general/filterStdData'

//Placeholder DATA
import staticData from '../general/static-5-fin-data';
import staticCompetitorData from '../general/static-competitor-5-fin-data';

class Analysis extends Component {

  constructor(props) {
    super(props);
    this.state = {
      companyData: standardizeData(staticData),
      competitorData: standardizeData(staticCompetitorData),
    };
  }

  render() {
    const coAltmanData = calculateAltmanZScores(filterStdData(altmanKeys, this.state.companyData));
    const pureCoData = coAltmanData[0].data
    // insert company specific data into chart dataset
    chartData.datasets[0].data = coAltmanData[0].displayData;
    
    const peerAltmanData = calculateAltmanZScores(filterStdData(altmanKeys, this.state.competitorData));
    const purePeerData = peerAltmanData[0].data
    chartData.datasets[1].data = peerAltmanData[0].displayData;
    return(
      <div className='container'>
      
          <AltmanCard zScore={coAltmanData[0].zScore} cData={chartData} cOptions={chartOptions} companyName={this.state.companyData[0].primarysymbol} peerName={this.state.competitorData[0].primarysymbol}coSeries={pureCoData} peerSeries={purePeerData}/>
      
      </div>
    )
  }
}

export default Analysis;
