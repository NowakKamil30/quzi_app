import { Question } from "../../Interfaces/Question";
import { DOWNLOAD_QUESTIONS, QuestionType } from "../ActionsTypes/questionTypes";

export const downloadQuestion = (questions: Question[]): QuestionType => ({
    type: DOWNLOAD_QUESTIONS,
    payload: questions
});