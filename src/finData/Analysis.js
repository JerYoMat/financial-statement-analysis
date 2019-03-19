import React, { useState } from 'react';
import StandardizeData from '../general/StandardizeData';
import staticOnePeriodData from '../general/static-1-fin-data';

const Analysis = () => {
  const finData = StandardizeData(staticOnePeriodData);
  const [companyFinData, setCompanyFinData] = useState(finData)

  return (
    <div className='container'>
      <div className='col-md-3'>
          LeftTab
      </div>
      <div className='col-md-9'>Main</div>

    </div>
  );
}
export default Analysis; 

//I need 
//company data - once 
//submission data -each period

//date data -each period
//fin data - each period 
