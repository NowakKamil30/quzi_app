import axios from "axios";
import { Question } from "../../Interfaces/Question";
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { downloadQuestion } from "../Actions/questionActions";

const downloadQuestions = async (): Promise<Question[]> => {
    const response = await axios.get('http://localhost:8080/api/v1/question/limit?limit=30');

    return response.data as Question[];
}

export const getQuestions = (): ThunkAction<void, {}, {}, AnyAction> => (
    async dispatch => {
        const questions = await downloadQuestions();
        dispatch(downloadQuestion(questions));
    }
)

