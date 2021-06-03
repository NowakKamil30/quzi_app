import { Question } from "../../Interfaces/Question";

export const DOWNLOAD_QUESTIONS = "QUESTION_DOWNLOAD_QUESTION";

interface downloadQuestion {
    type: typeof DOWNLOAD_QUESTIONS;
    payload: Question[];
}

export type QuestionType = downloadQuestion;