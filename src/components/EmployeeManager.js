import React,{useState} from 'react';
import { addEmployee,removeEmployee } from '../redux'
import { connect } from 'react-redux';


const EmployeeManager = (props) => {
    const [number,setNumber] =useState(0)
    
    return (
        <div>
            <h2>Number of Employee-{props.employees}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={()=>props.addEmployee(number)}>Add Employee</button>
            <button onClick={()=>props.removeEmployee(number)}>Remove Employee</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        employees: state.Employee.employees
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addEmployee: (number) => dispatch(addEmployee(number)),
        removeEmployee: (number) =>dispatch(removeEmployee(number))
    }
}

export default connect
(mapStateToProps,
mapDispatchToProps
)(EmployeeManager)