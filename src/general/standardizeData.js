function standardizeData(rawData) {
  //Edgar Data Check
  if (rawData['result']['rows']) {
  const rowList = rawData['result']['rows'].map((item, index) => {
    const row = {}
    item['values'].forEach((pairPair, index) => {
      row[pairPair.field] = pairPair.value
    });
    return row;
  });
    return rowList}
  //TODO: Add IEX Data

}



export default standardizeData;