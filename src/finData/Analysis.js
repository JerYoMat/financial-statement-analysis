import React, { useState } from 'react';
import onePeriodFin from '../general/static-1-fin-data.json'
import AltmanZScore from './components/AltmanZScore'
const A = ((304046000.0 - 61391000.0)/947361000.0);
  const B = (33767000.0/947361000.0);
  const C = (70482000.0/947361000.0);
  const D = 232000000 / 196739000.0;
  const E = 518920000.0 / 947361000.0;
// Z-Score = 1.2A + 1.4B + 3.3C + 0.6D + 1.0E

let data={
  labels: ["A", "B", "C", "D", "E"],
  datasets: [{
  label: "Altman Z-Score",
  backgroundColor: 'rgba(255, 99, 132, 0.2)',
  borderColor: 'rgb(255, 99, 132)',
  data: [(1.2*A), (1.4*B), (3.3*C), (0.6*D), E],
  }]
}

const Analysis = () => {
  //const finData = StandardizeData(staticOnePeriodData);
  //const [companyFinData, setCompanyFinData] = useState(finData)
 


  return (
    <div className='container'>
      <div className='row'>
      <div className='col-md-3'>
          LeftTab
      </div>
      <div className='col-md-9'>
       <AltmanZScore data={data}/>
      </div>
      </div>
    </div>
  );
}
export default Analysis; 

//I need 
//company data - once 
//submission data -each period

//date data -each period
//fin data - each period 
