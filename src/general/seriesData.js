import filterData from '../general/filterData';

const seriesData = (keyArray, apiData) => {
  const jsonData = filterData(keyArray, apiData);
  const keys = Object.keys(jsonData[0]);
  let newAry = []  
  keys.map((title) => { 
    const newObj = {name: title,
                    data: []};
    jsonData.map((obj) => {
      newObj.data.push(obj[title]);
    })
    newAry.push(newObj)
  })
  return newAry;
}


export default seriesData;