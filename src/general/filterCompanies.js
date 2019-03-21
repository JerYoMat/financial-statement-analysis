import standardizeData from './standardizeData';

// TODO: I'd like to reuse this to get the desired outputs every time.
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

