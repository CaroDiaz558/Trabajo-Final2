import { useState } from "react";

export default function useFavorito() {
  const [favoritos, setFavoritos] = useState([]);

  function agregarFavoritos(pelicula) {
    let bandera = false;
    favoritos.forEach((e) => {
      if (pelicula.id === e.id) {
        bandera = true;
      }

    });

    if (!bandera) {
      const nuevoFavoritos = [...favoritos];
      nuevoFavoritos.push(pelicula);
      setFavoritos(nuevoFavoritos);
      
    }
    return true;
  }

  function eliminarFavoritos(id) {
    const nuevoFavoritos = favoritos.filter((e) => e.id !== id);
    setFavoritos(nuevoFavoritos);
    return false;
  }

  function cambiarEstado(id){
   let bandera= false;
    favoritos.forEach((e) => {
      if (id === e.id) {
        bandera=true;
      }

    });

    if(bandera){
      return true;
    }else{
      return false;
    }
  
  }

  return { favoritos, agregarFavoritos, eliminarFavoritos, cambiarEstado};
}


