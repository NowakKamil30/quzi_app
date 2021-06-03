import {combineReducers} from "redux";
import { QuestionReducer, QuestionReducerState } from "./QuestionReducer";
import { ResumeReducer, ResumeReducerState } from "./ResumeReducer";
import userReducer, { UserReducerState } from './userReducer';

const rootReducer = combineReducers(
    {
        userReducer : userReducer,
        questionReducer: QuestionReducer,
        resumeReducer: ResumeReducer
    }
)

export default rootReducer;

export interface ReduceTypes {
    userReducer: UserReducerState;
    questionReducer: QuestionReducerState;
    resumeReducer: ResumeReducerState;
}