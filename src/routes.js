import NuevoVideo from "pages/NuevoVideo";
import Inicio from "pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecera from "components/cabecera/cabecera";
import Pie from "components/Pie/pie";
import Container from "components/Container";


function AppRoutes(){
    return(
        <BrowserRouter>
        <Cabecera></Cabecera>
        <Container>
        <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/NuevoVideo" element={<NuevoVideo/>}></Route>
        </Routes>
        </Container>
        <Pie/>
        </BrowserRouter>
    )
}

export default AppRoutes;