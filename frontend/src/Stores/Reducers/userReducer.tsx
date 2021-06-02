import {userActions} from '../ActionsTypes/userActionsTypes';
import {UserOperationsTypes} from '../Actions/userActions';
import {UserInterface} from '../../Interfaces/userInterface';


export interface UserReducerState {
    user ?: UserInterface,
    isSaved : boolean,
    scored : number,
}

const INITIAL_STATE: UserReducerState = {
    user : {
        name : '',
        email : '',
    },
    isSaved : false,
    scored : 0,
};


const userReducer = (state : UserReducerState = INITIAL_STATE, action : UserOperationsTypes) : UserReducerState =>{
    switch(action.type){
        case userActions.SAVE_USER: {
            return {...state, user : action.payload}
        }

        default :
            return state
    }
}
export default userReducer;