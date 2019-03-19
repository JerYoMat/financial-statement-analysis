function ConvertedCompanyData(rawData) {
  const rowList = rawData['result']['rows'].map((item, index) => {
    const row = {}
    item['values'].forEach((pairPair, index) => {
      row[pairPair.field] = pairPair.value
    });
    return row;
  });
  return rowList

}

export default ConvertedCompanyData;