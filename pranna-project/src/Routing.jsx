import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from "./App"
import PaginaPrincipal from "./PaginaPrincipal"
import SobreNosotros from "./SobreNosotros"


function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/pagina-principal" element={<PaginaPrincipal />} />
                    <Route path="/sobre-nosotros" element={<SobreNosotros />} />            
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing
