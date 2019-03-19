function ConvertedCompanyData(rawData) {
  const companyList = rawData['result']['rows'].map((item, index) => {
    const company = {}
    item['values'].forEach((pairPair, index) => {
      company[pairPair.field] = pairPair.value
    });
    return company;
  });
  return companyList

}

export default ConvertedCompanyData;