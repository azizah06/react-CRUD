import React, { Component } from 'react';
//import GetOnlinePosts from './components/OnlinePosts/GetOnlinePosts';

import GetCovidDatas from './GetCovidDatas';
 
class Data extends Component {
  render() {
    return (
      <div className="data">
        <h1 className="header">Data terkini COVID-19</h1>
        <GetCovidDatas/>
      </div>
    );
  }
}
 
export default Data;