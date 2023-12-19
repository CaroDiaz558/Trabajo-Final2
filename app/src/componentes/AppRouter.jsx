import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Busqueda,
  Principal,
  Pelicula,
  Header,
  Footer,
  DetallePelicula,
  Favoritos,
} from "../componentes/index";
import useFavorito from "../hooks/useFavorito";

const AppRouter = () => {
  const { favoritos, agregarFavoritos, eliminarFavoritos } = useFavorito();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Principal />} />
        <Route path="busqueda" element={<Busqueda />} />
        <Route path="busqueda" element={<Pelicula />} />
        <Route
          path="/pelicula/:id"
          element={
            <DetallePelicula
              favoritos={favoritos}
              agregarFavoritos={agregarFavoritos} 
              
            />
          }
        />
        <Route
          path="/favoritos"
          element={
            <Favoritos
              favoritos={favoritos}
              eliminarFavoritos={eliminarFavoritos}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export { AppRouter };
