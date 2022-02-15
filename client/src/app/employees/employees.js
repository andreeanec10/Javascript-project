import React from "react";
import  './employees.css';
import Axios from "axios";

function Employees() {
    var list;
    Axios({
        method: "GET",
        url: "http://localhost:5000/employees",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => {
        let data = response.data; // Let supposed  the data is in this format [{ id: 1 }, { id: 2 }, { id: 3 }]
        let tr = '';
        let tableBody = document.querySelector('#table_id');
        data.forEach(function(value) {
            tr += 
            `<tr>
                <td>${value._id}</td>
                <td>${value.name}</td>
                <td>${value.address}</td>
                <td>${value.email}</td>
                <td>${new Date(value.hire_date).toLocaleDateString("en-US")}</td>
                <td>${value.job_title}</td>
                <td>${value.salary}</td>
                <td>${value.project_id}</td>
            </tr>`;
      });
      document.querySelector('#table_id tbody').innerHTML = tr; //Append the data
      list = response.data;
      console.log(response.data);
    });
    
    return (
        <table id="table_id">
            <tbody>
            </tbody>
        </table>
    );
}

export default Employees;
