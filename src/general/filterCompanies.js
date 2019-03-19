import StandardizeData from './StandardizeData';
import companyRawData from './static-company-data.json';


function filterCompanies(searchText, numResults) {
  return StandardizeData(companyRawData)
  .filter(companyObj => {
    if (companyObj.companyname.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    return false;
  })
  .slice(0, numResults);
}

export default filterCompanies;
