import { BrowserRouter, Route, Routes } from "react-router-dom";
import DigimonPage from "../pages/DigimonPage";
import Details from "../pages/Details";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={<DigimonPage/>}>
                </Route>
                <Route 
                    path="/details" 
                    element={<Details/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;