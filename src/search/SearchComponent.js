import React, { PureComponent } from "react";
import SearchInput from "./components/SearchInput";
import CompanyResults from "./components/CompanyResults";
import filterCompanies from "../general/filterCompanies";

class SearchComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredCompanies: filterCompanies("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredCompanies: filterCompanies(event.target.value, 20)
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
