import React from 'react';
import Card from './Components/Card';  
import Utama from './Components2/utama';
import List from './Components2/List';


class App extends React.Component{
  render(){
    return(
      <div>
        <hr/>
        <Card>
          <nav className="navbar navbar-expand-lg navbar-light warna bg-info">
                  <a className="navbar-brand" href="/"> BERANDA </a>
                  <button className="navbar-toggler toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav">
                        <li class="nav-item active">
                          <a className="nav-link" href="Protokol" >PROTOKOL</a>
                          </li>
                        <li className="nav-item active">
                        <a className="nav-link" href="Data">DATA</a>
                        </li>
                        <li className="nav-item active">
                        <a className="nav-link" href="List">LIST</a>
                        </li>
                      </ul>
                      
                      </div>
                      </nav>
         <hr/>
        <p><Utama/></p>
        </Card>
      </div>




      
    )
  }
}
export default App;
