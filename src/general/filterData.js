import standardizeData from './standardizeData';
//returns array with only desired data values for each 'row' or financial period in the provided data.  
//Underlying assumptions: The provided data has the keys being looked for AND all of the data being passed in pertains to the same entity.

function filterData(keyArray, data) {
  return standardizeData(data).map(singlePeriod => {
    const period = {}
    keyArray.map(key => {
      period[key] = singlePeriod[key]
    })
    return period;
  }) 
}


export default filterData;