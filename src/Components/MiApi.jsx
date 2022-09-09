import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import brand from '../Assets/img/brand.png';

const MiApi = () => {
// guardará la info de la API
const [listaPersonajes, setListaPersonajes] = useState([]);
const [busqueda, setBusqueda] = useState('');


// Llamamos a la función que consume la API
  useEffect(() => {
      consultarInformacion();
  }, []);


// Función que consulta la API
const consultarInformacion = async () => {
  const url = 'https://www.breakingbadapi.com/api/characters';
  const response = await fetch(url);
  const data = await response.json();
  setListaPersonajes(data);
}

//Función para capturar el input del buscador
 const capturarInputPersonaje = (e) => {
    setBusqueda(e.target.value);
    console.log(e.target.value);
  }


// Función para ordenar array
 let ordenar = (e)=>{
    let arrayOrdenado
if ((e.target.value === "dflt")){
    setListaPersonajes(listaPersonajes);
    
}
else if ((e.target.value) === "az"){
    console.log("array de la a a la z")
    arrayOrdenado=[...listaPersonajes].sort((a,b)=>a.name > b.name ? 1 : -1,);
    console.log(arrayOrdenado);
    setListaPersonajes(arrayOrdenado);
}
else if ((e.target.value) === "za"){
    arrayOrdenado=[...listaPersonajes].sort((a,b)=>a.name > b.name ? -1 : 1,);
    setListaPersonajes(arrayOrdenado);
}
else if ((e.target.value) === "breakingBad") {
    arrayOrdenado=[...listaPersonajes].filter((e)=>e.category.includes("Breaking Bad"));
    setListaPersonajes(arrayOrdenado);
  }
else if ((e.target.value) === "betterCallSaul") {
    arrayOrdenado=[...listaPersonajes].filter((e)=>e.category.includes("Better Call Saul"));
    setListaPersonajes(arrayOrdenado);
}
 }
 


//--------------------------------------------------------------------------------------------------------------------------


return ( 
<>
<div className="container-fluid">
<div className="main-container">
    {/* //Buscador de personajes --------------------------------------------------------------------------------------------- */}
    
    
        <div className="buscador-personajes">
        <Navbar.Brand href="#">
        <img src={brand} width="120" height="150" className="d-inline-block align-top fs-3 text-white my-5" alt="logo"/>
        </Navbar.Brand>
        
        
        <Form>
            <Form.Control
            onChange={capturarInputPersonaje}
            value={busqueda}
            name="buscadorPersonaje"
            type="search"
            placeholder="Encuentra al personaje"
            className="form-control-lg me-5 justify-content-center select"
            aria-label="Search"
            />
        </Form>
        </div>
       

{/* //Cards and sort container -----------------------------------------------------------------------------------------------*/}
    <div className='cardsAndSort'>

          {/* Ordenar por: ---------------------------------------------------------------------------------------------------*/}
       <div className="sort-container">
        <Form.Select className='ordenador' defaultValue={""} onChange={ordenar} aria-label="Default select example" placeholder="Ordenar por:">
          <option value="dflt">Ordenar por:</option>
          <option value="az">De la A a la Z</option>
          <option value="za">De la Z a la A</option>
          <option value="breakingBad">Breaking Bad</option>
          <option value="betterCallSaul">Better Call Saul</option>
        </Form.Select>
       </div>

    {/* //Main cards container -----------------------------------------------------------------------------------------------*/}
    <div className='main-cards-container'>
    {listaPersonajes.filter((p)=> {
    //Props.setListaPersonajesFiltrada viene del Header. Si no hay nada ahí, me retorna el array original.
    if(busqueda === ''){
     console.log("sin filtro");
     return p;
    }
    else if ((p.name).toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()) || (p.nickname).toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()))
    {
     console.log("con buscador");
     return p;
    }
    else if ((p.category).toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()))
    {
    console.log("por serie");
    return p;
    }
    else{
       console.log(p.category);
    }
    //Acá empieza el map:
    }).map((p)=> (
    <Card className='mycard' key={p.char_id}>
       
      <Card.Img className='card__img' variant="top" src={p.img} />
    
        <Card.Body className='card__body text-danger'>
          <Card.Title className='card__title'>{p.name}</Card.Title>
    
          <ListGroup variant="flush">
          <ListGroup.Item>Sobrenombre: <span className='info'>{p.nickname}</span></ListGroup.Item>
          <ListGroup.Item>Ocupación: <span className='info'>{p.occupation[0]}</span></ListGroup.Item>
          <ListGroup.Item>Serie: <span className='info'>{p.category}</span></ListGroup.Item>
          </ListGroup>
          
        </Card.Body>
    </Card>
    ))
      
  }
    </div> 
</div>
</div>



</div>
</>

) //cierre del return
}; //cierre de MiApi


export default MiApi