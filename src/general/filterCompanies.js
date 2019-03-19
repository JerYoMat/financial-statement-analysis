import ConvertedCompanyData from './ConvertedCompanyData';
import companyRawData from './static-company-data.json';


function filterCompanies(searchText, numResults) {
  return ConvertedCompanyData(companyRawData)
  .filter(companyObj => {
    if (companyObj.companyname.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    return false;
  })
  .slice(0, numResults);
}

export default filterCompanies;
