import standardizeData from './standardizeData';

function filterCompanies(searchText, numResults, data) {
  return standardizeData(data)
    .filter(jsonObj => {
      if (jsonObj.companyname.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      return false;
    })
    .slice(0, numResults);
}

export default filterCompanies;

