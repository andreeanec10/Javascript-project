import React, {useRef} from "react";
import  './employees.css';
import Axios from "axios";
import add from "./utils";

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

class AddEmployee extends React.Component {

    postFun = async (event) => {
        console.log("/////////////////////");
        console.log(event.currentTarget.name);
        await sleep(10000000);
        // Axios({
        //     method: "POST",
        //     url: "http://localhost:5000/Employees/post",
        //     headers: {
        //     "Content-Type": "application/json"
        //     },
        //     data: {
        //         name: event.target.name,
        //         address: event.target.address,
        //         email: event.target.email,
        //         hire_date: event.target.data,
        //         job_title: event.target.post,
        //         salary: event.target.sal,
        //         project_id: event.target.proiect_id
        //     }
        // })
    }
    render() {
        return (
            <form onSubmit={this.postFun}>
                    <label>Name:<br/>
                        <input type="text" name="name"></input><br/>
                    </label>
                    <label>Adresa:<br/>
                        <input type="text" name="address"></input><br/>
                    </label>
                    <label>Email:<br/>
                        <input type="text" name="email"></input><br/>
                    </label>
                    <label>Data Angajare:<br/>
                        <input type="text" name="data"></input><br/>
                    </label>
                    <label>Post:<br/>
                        <input type="text" name="post"></input><br/>
                    </label>
                    <label>Salariu:<br/>
                        <input type="text" name="sal"></input><br/>
                    </label>
                    <label>Id proiect:<br/>
                        <input type="text" name="proiect_id"></input><br/>
                    </label>
                    <button type="submit">
                        Add employee
                    </button>
            </form>
        );
    }
}


export default AddEmployee;