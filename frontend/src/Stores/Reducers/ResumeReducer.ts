import { Score } from "../../Interfaces/Score";
import { GET_SCORE, ResumeTypes } from "../ActionsTypes/resumeTypes";

export interface ResumeReducerState {
    score: Score;
}

const INITIAL_STATE: ResumeReducerState = {
    score: {
        score: 0,
        maxPoints: 0,
        message: ""
    }
}

export const ResumeReducer = (state: ResumeReducerState = INITIAL_STATE, action: ResumeTypes): ResumeReducerState => {
    switch(action.type) {
        case GET_SCORE: {
            return {...state, score: action.payload}
        }
        default: {
            return state;
        }
    }
}