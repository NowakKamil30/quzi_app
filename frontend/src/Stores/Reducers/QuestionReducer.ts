import { Question } from "../../Interfaces/Question";
import { DOWNLOAD_QUESTIONS, QuestionType } from "../ActionsTypes/questionTypes";

export interface QuestionReducerState {
    questions: Question[];
}

const INITIAL_STATE: QuestionReducerState = {
    questions: []
}

export const QuestionReducer = (state: QuestionReducerState = INITIAL_STATE, action: QuestionType): QuestionReducerState => {
    switch(action.type) {
        case DOWNLOAD_QUESTIONS: {
            return {...state, questions: action.payload };
        }
        default: {
            return state;
        }
    }
}