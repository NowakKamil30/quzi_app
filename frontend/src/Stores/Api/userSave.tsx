import {UserInterface} from '../../Interfaces/userInterface';
import {saveUserNameAndEmail} from '../Actions/userActions';
import { ThunkDispatch } from 'redux-thunk';


export const userSave = (userToBeSaved : UserInterface)  => async (dispatch : ThunkDispatch<{}, {}, any>) => {
    dispatch(saveUserNameAndEmail(userToBeSaved));
};