import React,{Component} from 'react'
import './App.scss';
import Navbar from './components/navbar/Navbar'
import Tourlist from "../src/components/tourlist/tourlist"

class App extends Component{
  render(){
    return (
      <div>
        <Navbar />
        <Tourlist/>
      </div>
    );
  }
}

export default App;
