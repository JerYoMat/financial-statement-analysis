import React from 'react';


const CompanyCard = ({ companyname, primarysymbol, primaryexchange }) => {
  return (
    <div className='row'>
      <div className='col-md-6 offset-3'>
        <div className="card w-75">
          <div className="card-body col-10 offset-2">
            <h5 className="card-title">{companyname}</h5>
            <span>Ticker: {primarysymbol}</span>  |  <span>Exchange: {primaryexchange}</span>
            <btn className="btn btn-primary">Select</btn>
          </div>
        </div>
      </div>   
    </div> 
  )
}

export default CompanyCard;