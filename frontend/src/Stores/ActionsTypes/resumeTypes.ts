import { Score } from "../../Interfaces/Score";

export const GET_SCORE = "RESUME_GET_SCORE";

interface GetScore {
    type: typeof GET_SCORE;
    payload: Score;
}

export type ResumeTypes = GetScore;