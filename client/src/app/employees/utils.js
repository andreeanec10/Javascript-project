import React from "react";
import  './employees.css';
import Axios from "axios";

function add() {
    return (
        <form>
            <label>
                Name:
                <input type="text" name="name"></input>
            </label>
        </form>
    );
}

export default add;
