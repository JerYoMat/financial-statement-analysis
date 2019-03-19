import React from 'react';


const CompanyCard = ({ companyname, primarysymbol, primaryexchange }) => {
  return (
    <div className='row'>
      <div className='col-md-3'></div>
      <div className='col-md-6'>
        <div className="card w-75">
          <div className="card-body col-10 offset-2">
            <h5 className="card-title">{companyname}</h5>
            <div>Ticker: {primarysymbol}</div>
            <div>Exchange: {primaryexchange}</div>
          </div>
        </div>
      </div>   
    </div> 
  )
}

export default CompanyCard;