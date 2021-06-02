import {userActions} from '../ActionsTypes/userActionsTypes';
import {UserInterface} from '../../Interfaces/userInterface';


interface SaveUserNameAndEmailInterface {
    type : typeof userActions.SAVE_USER,
    payload : UserInterface, 
}

interface UserBeingSavedInterface {
    type : typeof userActions.SAVE_USER_IN_PROGRESS,
    payload : boolean, 
}

interface UserBeingSavedErrorInterface {
    type : typeof userActions.SAVE_USER_IN_PROGRESS_ERROR,
    payload : boolean, 
}

export type UserOperationsTypes  =  SaveUserNameAndEmailInterface /*|
                                    userBeingSavedInterface | 
                                    userBeingSavedErrorInterface;*/


export const saveUserNameAndEmail = (user: UserInterface): SaveUserNameAndEmailInterface => ({
    type: userActions.SAVE_USER,
    payload: user
});

export const userBeingSaved = (isSaved: boolean): UserBeingSavedInterface => ({
    type: userActions.SAVE_USER_IN_PROGRESS,
    payload: isSaved,
});

export const userBeingSavedError = (isSaved: boolean): UserBeingSavedErrorInterface => ({  //todo 
    type: userActions.SAVE_USER,
    payload: isSaved,
});