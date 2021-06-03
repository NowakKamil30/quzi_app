import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Question } from '../Interfaces/Question';


const QuestionItem: React.FC<{question: Question, onChange: (answer: string) => void}> = ({question, onChange}) =>{

    const classes = useStyles();
    return(
        <div className={classes.root}>
           <h3>{question.question}</h3>
           <div onChange={(event: any) => onChange(event.target.defaultValue)
           }>
             {question?.answerDtos.map(answer => 
             <label key={answer.answer+""} className={classes.radioBox}>
                 <input type="radio" value={answer.answer+""} name={question.id+""} /> 
                 {answer.answer}
            </label> )}
           </div>
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) => createStyles({

    root : {
        backgroundColor : theme.palette.text.primary,
        borderRadius: "15px 50px",
        padding: "5px 20px",
        width: '80%',
        margin: 20,
    },
    radioBox: {
        display: "flex",
        height: 40
    }

}));

export default QuestionItem;