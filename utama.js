import React from 'react'
import List from './List'
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import Data from './data';
import Protokol from './protokol';

const Utama = () => (
   
    <Switch>
        
        <Route exact path="/" component={Beranda}/>
        <Route path="/Protokol" component={Protokol}/>
        <Route path="/Data" component={Data}/>
        <Route path="/List" component={List} />
      
    </Switch>
    
)
export default Utama;
