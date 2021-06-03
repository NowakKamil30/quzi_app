import { Score } from "../../Interfaces/Score";
import { GET_SCORE } from "../ActionsTypes/resumeTypes";

export const getScore = (score: Score) => ({
    type: GET_SCORE,
    payload: score
})