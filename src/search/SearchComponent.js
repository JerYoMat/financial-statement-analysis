import React, { PureComponent } from "react";
import SearchInput from "./components/SearchInput";
import CompanyResults from "./components/CompanyResults";
import filterCompanies from "../general/filterCompanies";
import apiData from '../general/static-company-data.json';


//TODO: How should data be passed in? 
class SearchComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredCompanies: filterCompanies("", 20, apiData)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredCompanies: filterCompanies(event.target.value, 20, apiData)
    });
  };

  render() {
    return (
      <div>
        <SearchInput textChange={this.handleSearchChange} />
        <CompanyResults companyData={this.state.filteredCompanies} />
      </div>
    );
  }
}
export default SearchComponent;
