import React from "react";
import { Link } from "react-router-dom";

const Pelicula = ({ pelicula }) => {
  const urlPath = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <div className="item-pelicula">
        <Link to={`/pelicula/${pelicula.id}`} className="link-peli">
          <div className="img-pelicula">
            <img src={`${urlPath + pelicula.poster_path}`} alt="" />
          </div>
        </Link>
        
      </div>
    </>
  );
};

export { Pelicula };
