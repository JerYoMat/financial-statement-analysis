import React from 'react';
import RadarExample from './components/AltmanZScoreChart';
import filterData from '../general/filterData';
import staticData from '../general/static-1-fin-data.json';
import industryData from './components/altman-industry-data.json';
import { altmanKeys } from '../general/keyArrays';




const Analysis = () => {
  const scoreData = [filterData(altmanKeys, staticData)[0], filterData(altmanKeys, industryData)[0]]
  
  return (
  
  <RadarExample scoreData={scoreData} />
  )
}

export default Analysis;





