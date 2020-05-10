import {ADD_EMPLOYEE,REMOVE_EMPLOYEE} from './EmployeeValue';

const addEmployee = (number=0) => {
    return {
        type: ADD_EMPLOYEE,
        payload:number
    }
}

const removeEmployee = (number=0) =>{
    return {
        type: REMOVE_EMPLOYEE,
        payload:number
    }
}

export {
    addEmployee,removeEmployee
}