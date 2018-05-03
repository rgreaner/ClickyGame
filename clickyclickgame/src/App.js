import React, { Component } from 'react';
import Section from "./components/Section"
import './App.css';


state = {
  bands: [
      {
          id: 1,
          url: ""

      }
  ]
}


let bands = shuffle(this.state.bands);
this.setState ({ bands })



const App = () => (
  
  <div>
    <Section />
  </div>
)

export default App;
