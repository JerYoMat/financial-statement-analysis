import ConvertedCompanyData from '../search/components/ConvertedCompanyData';

function filterCompanies(searchText, numResults) {
  return ConvertedCompanyData()
  .filter(companyObj => {
    if (companyObj.companyname.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    return false;
  })
  .slice(0, numResults);
}

export default filterCompanies;
