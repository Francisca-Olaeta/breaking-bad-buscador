import Buscador from "./Components/Buscador";
import Header from "./Components/Header";
import Main from "./Components/Main";
import React, {useState} from "react";

function App() {
  const [busqueda, setBusqueda] = useState('');

  return (
    <>
    <div className="App">
      <Buscador setBusqueda={setBusqueda}/>
      <Header  />
      <div className="container-fluid main-container">
      <Main busqueda={busqueda} />


      </div>
     
    </div>
    </>
  );
}

export default App;
