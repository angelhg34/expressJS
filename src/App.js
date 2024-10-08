import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Index from "./paginas";
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={<Index />}/>      
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;