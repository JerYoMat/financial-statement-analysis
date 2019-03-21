import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from './search/SearchComponent';
//import Analysis from './finData/Analysis';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  const [display, setDisplay] = useState('not analysis');
  
  if (display === 'analysis') {
    return <div></div>
  }
  return <SearchComponent />

}



ReactDOM.render(<App />, document.getElementById('root'));



