import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card';

const Main = ({busqueda}) => {

  // info guardará la info de la API
    const [listaPersonajes, setListaPersonajes] = useState([]);


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

  // Funcion para ordenar el array de la A a la Z
  const dataAscendente = ((data) =>{
    data.sort()
  })


  return (
     
    <div className='main-cards-container'>
      {listaPersonajes.filter((p)=> {
      //Props.setListaPersonajesFiltrada viene del Header. Si no hay nada ahí, me retorna el array original.
      if(busqueda === ''){
       console.log("sin buscador");
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
      //Acá empieza el map:
      }).map((p)=> (
        <Card className='col-12 col-sm-6 col-md-4 col-lg-3 m-5' key={p.char_id}>
        <Card.Img className='card__img' variant="top" src={p.img} />
      
          <Card.Body className='card__body text-danger'>
            <Card.Title className='card__title'>{p.name}</Card.Title>
      
            <ListGroup variant="flush">
            <ListGroup.Item>Sobrenombre: {p.nickname}</ListGroup.Item>
            <ListGroup.Item>Ocupación: <ul>{p.occupation.map((e)=>{
              <li>(e)</li>})}</ul>
            </ListGroup.Item>
            <ListGroup.Item>Serie: {p.category}</ListGroup.Item>
            </ListGroup>
            
          </Card.Body>
        </Card>
    ))
        
    }
        
      
         
    </div>
   

  );
}


export default Main