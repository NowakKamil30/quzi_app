import axios from "axios";
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ResultSet } from "../../Interfaces/ResultSet";
import { Score } from "../../Interfaces/Score";
import { getScore } from "../Actions/resumeActions";

const sendResume = async (result: ResultSet): Promise<Score> => {
    const response = await axios.post('http://localhost:8080/api/v1/question/result', result);

    return response.data as Score;
}

export const getEndScore = (result: ResultSet): ThunkAction<void, {}, {}, AnyAction> => (
    async dispatch => {
        const score = await sendResume(result);
        dispatch(getScore(score));
    }
)

