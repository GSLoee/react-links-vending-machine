import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './VendingMachine.css'
import Candy from "./Candy";
import Soda from "./Soda";
import Chips from "./Chips";
import Home from "./Home";

function VendingMachine() {
    return (
        <div className="VendingMachine">
            <BrowserRouter>
                <Routes>
                    <Route path="/candy" element={<Candy />} />
                    <Route path='/soda' element={<Soda />} />
                    <Route path='/chips' element={<Chips />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine