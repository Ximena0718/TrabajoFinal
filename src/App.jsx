
import '/src/App.css'
import Navar from './components/Navegacion/Navar';
import Carousel from './components/carousell';
import Inicio from './components/pages/inicio';
import Diseño from './components/pages/Diseño';
import Powerfull from './components/pages/Powerfull';
import Ubicacion from './components/pages/Ubicacion';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {


  return (
    <BrowserRouter>

      <div className="main-container">
        <Navar />
        <Routes>
          <Route element={<Carousel />} path="/"></Route>
          <Route element={<Inicio />} path="/inicio"></Route>
          <Route element={<Diseño />} path="/diseños"></Route>
          <Route element={<Powerfull />} path="/powerfull"></Route>
          <Route element={<Ubicacion />} path="/ubicacion"></Route>

        </Routes>


      </div >

    </BrowserRouter>

  )
}

export default App;