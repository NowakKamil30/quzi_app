import { Result } from "./Result";
import { UserInterface } from "./userInterface";

export interface ResultSet {
    resumeQuestions: Result[];
    user: UserInterface;
}