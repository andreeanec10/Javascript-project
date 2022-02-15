import React from "react";
import  './menu.css';
import Employees from "../employees/employees";
import { NavLink } from "react-router-dom";

function Menu() {


    return (
        <div className="Menu">
            <header className="Menu-header">Find information about your company faster!</header>
            <div className="Menu-body">
                <button className="Menu-button">
                    Show list of Employees
                </button>
                <button className="Menu-button">Show list of Projects</button>
            </div>
            <footer className="Menu-footer">
                <table>
                    <td>
                        <tr>Hello1!</tr>
                        <tr>Hello2!</tr>
                    </td>
                    <td></td>
                </table>
            </footer>
        </div>
    );
}

export default Menu;
