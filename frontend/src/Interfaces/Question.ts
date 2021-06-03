import { Answer } from './Answer';

export interface Question {
    id: String;
    question: String;
    answerDtos: Answer[];
}