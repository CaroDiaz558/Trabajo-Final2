import React, { useState, useEffect } from "react";
import './Favoritos.css'
import { Pelicula } from '../Pelicula/Pelicula'

const Favoritos = ({ favoritos, eliminarFavoritos}) => {
  const [fav, setFav] = useState(true);


  function agregarFavorito(id) {
    if (fav) {
      eliminarFavoritos(id)
     
    }
  }

  return (
    <>
    <div className="favorito"> 
    
      <div className="title-favorito">Lista de tus Favoritos</div>
    
    <div className="list-favorito">
    <ul>
        {favoritos.map((favorito) => (

          <li key={favorito.id}>
           <div className="favorito-item">
 
           <div>
               <Pelicula key={favorito.id} pelicula={favorito} />
           </div>
           
          <div className="icon-favorito">
              {fav ? (
                <i
                  className="bi bi-dash-circle icon-fav"
                  onClick={() => agregarFavorito(favorito.id)}
                >
                  {" "}
                </i>
              ) : (
                <i
                  className="bi bi-plus-circle-fill icon-fav"
                  onClick={() => agregarFavorito(favorito.id)}
                >
                  {" "}
                </i>
              )}
            </div>
            
           </div>
          </li>
        ))}
      </ul>
    </div>
     

       
    </div>
    </>
  );
};

export { Favoritos };
