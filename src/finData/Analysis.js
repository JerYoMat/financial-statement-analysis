import React, { Component } from 'react';
import AltmanCard from './components/AltmanCard';
import { altmanKeys } from '../general/keyArrays';
import calculateAltmanZScores from './components/calculateAltmanZScores';
import standardizeData from '../general/standardizeData'
import {chartData, chartOptions} from './components/chartConfig';
import filterStdData from '../general/filterStdData'

//Placeholder DATA
import staticData from '../general/static-2-fin-data';
import staticIndData from './components/altman-industry-data.json' 


class Analysis extends Component {
  state = {
    companyData: standardizeData(staticData),
    industryData: standardizeData(staticIndData),
  };

  render() {
    const cData = chartData
    const altmanData = calculateAltmanZScores(filterStdData(altmanKeys, this.state.companyData))
    cData.datasets[0].data = altmanData[0].displayData
    cData.datasets[1].data = calculateAltmanZScores(filterStdData(altmanKeys, this.state.industryData))[2].displayData  // ! Placeholder values.  Currently just the first company in the industry set

    return(
      <div className='container'>
        <div className='row'>
          <div className='col-md-1'></div>
          <AltmanCard zScore={altmanData[0].zScore} cData={cData} cOptions={chartOptions}/>
          <div className='col-md-1'></div>
        </div>

      </div>
    )
  }
}

export default Analysis;
