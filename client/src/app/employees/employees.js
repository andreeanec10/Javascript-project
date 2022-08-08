import React from "react";
import  './employees.css';
import Axios from "axios";

function deleteEmployee(id){
    Axios({
        method: "DELETE",
        url: "http://localhost:5000/Employees/delete/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
};

function Employee() {
    var list;
    Axios({
        method: "GET",
        url: "http://localhost:5000/employees",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => {
        let data = response.data; 
        var tr = `<tr>
            <th>Id angajat</th>
            <th>Nume</th>
            <th>Adresa</th>
            <th>E-mail</th>
            <th>Data angajare</th>
            <th>Post</th>
            <th>Salariu</th>
            <th>Id proiect</th>
            <th colspan="2">Optiuni</th>
        </tr>`;
        let tableBody = document.querySelector('#table_id');
        if(data != null) {
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
                    <td><button>Update</button></td>
                    <td><button>Delete</button></td>
                </tr>`;
        });
        }
      console.log(data);
      document.querySelector('#table_id tbody').innerHTML = tr; //Append the data
      list = response.data;
      console.log(response.data);
    });
    
    return (
        <table id="table_id">
            <tbody className="table">
            </tbody>
        </table>
    );
}

class Employees extends React.Component {
    render(){
        return Employee();
    };
}



export default Employees;
