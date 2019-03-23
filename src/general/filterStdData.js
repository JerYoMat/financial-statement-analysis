function filterStdData(keyArray, data) {
return data.map(singlePeriod => {
    const period = {}
    keyArray.map(key => {
      period[key] = singlePeriod[key]
    })
    return period;
  }) 
}


export default filterStdData;