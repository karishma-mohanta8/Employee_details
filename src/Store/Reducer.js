
import {
    ADD_EMPLOYEE,
    DELETE_EMPLOYEE

} from '../Action';
import { employee } from '../Data';


const initialState = {
    aEmployee: employee
}

const reducer = (state = initialState, action) => {
    if (action.type === ADD_EMPLOYEE) {
        var newEployee = [...state.aEmployee]
        return {
            aEmployee: newEployee
        }
    }
    if (action.type === DELETE_EMPLOYEE) {
        var deleteEployee = [...state.aEmployee];
        deleteEployee.splice(action.index, 1);
        return {
            aEmployee: deleteEployee
        }
    }
    return state;
}

export default reducer;