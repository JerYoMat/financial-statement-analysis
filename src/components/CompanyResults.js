import React, { PureComponent } from "react";

import CompanyCard from "./CompanyCard";


class CompanyResults extends PureComponent {
  render() {
    return (
      <div className="component-company-results">
        {this.props.companyData.map(companyD => (
          <CompanyCard
            key={companyD.cik}
            companyname={companyD.companyname}
            primarysymbol={companyD.primarysymbol}
            primaryexchange={companyD.primaryexchange}
          />
        ))}
      </div>
    );
  }
}

export default CompanyResults;
