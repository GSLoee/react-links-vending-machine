import React from "react";
import { Link } from "react-router-dom";

function Candy() {
    return(
    <div>
        <h1>Here is some Candy!</h1>
        <Link to='/'>GO BACK!</Link>
    </div>
    )
}

export default Candy;