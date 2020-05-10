import { combineReducers } from 'redux'
import employeeReducer from './Employees/EmployeeReducer'

import productReducer from './Products/ProductReducer'


const rootReducer = combineReducers({
    Product: productReducer,
    Employee:employeeReducer 
})

export default rootReducer