import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

// componentes
import Indice from '../indice/Indice'
import AnimalCrosssing from '../uno-animalCrossing/AnimalCrossing'



function Pages() {
  return (
    <>
      {/* Router */}
      <Router>
        <Switch>
            <Route path="/" exact component={Indice} />
          <Route path="/uno-animalCrossing" exact component={AnimalCrosssing} />
        </Switch>
      </Router>

    </>


  );
}

export default Pages;