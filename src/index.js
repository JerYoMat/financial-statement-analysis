import React from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from './components/SearchComponent'
import 'bootstrap/dist/css/bootstrap.css';
const App = () => {
  return (
    <div><SearchComponent /></div>
  );
}



ReactDOM.render(<App />, document.getElementById('root'));



