import { createStyles, makeStyles, Theme } from '@material-ui/core';
import {UserInterface} from '../Interfaces/userInterface';
import { connect, ConnectedProps  } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { useEffect } from 'react';
import { Question } from '../Interfaces/Question';
import { ReduceTypes } from '../Stores/Reducers/rootReducer';
import { getQuestions } from '../Stores/Api/question';
import QuestionItem from '../Components/QuestionItem';
import { Result } from '../Interfaces/Result';
import { useHistory } from 'react-router';
import { ResultSet } from '../Interfaces/ResultSet';
import { getEndScore } from '../Stores/Api/resume';


interface MapDispatcherToProps {
    getQuestions : () => void;
    sendResult: (result: ResultSet) => void;
}

interface  MapStateToProps {
    user : UserInterface,
    questions: Question[]
}

const mapStateToProps = (state : ReduceTypes) : MapStateToProps  =>({
    user: state.userReducer.user,
    questions: state.questionReducer.questions
  });
  

const mapDispatchToProps = (dispatch : ThunkDispatch<{}, {}, any>) : MapDispatcherToProps =>({
    getQuestions : () => dispatch(getQuestions()),
    sendResult: (result: ResultSet) => dispatch(getEndScore(result))
  });

const connector =  connect(mapStateToProps,mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;



const QuizPage : React.FC<PropsFromRedux> = ({getQuestions, sendResult, user, questions}) =>{

    let resultSet: Result[] = [];
    
    const classes = useStyles();
    const history = useHistory();
    
    useEffect(() => {
        getQuestions();
    },[])

    const onChangeAnswer = (questionId: string) => {
        return (answer: string) => {
            let isExist = false;
            resultSet = resultSet.map(result => {
                if(result.questionId === questionId) {
                    isExist = true;
                    result.answer = answer;
                }
                return result;
            });
            if(!isExist) {
                resultSet.push({questionId, answer});
            } 
            console.log(resultSet);
        }
    }

    return(
       <div className={classes.root}>
        <h2 className={classes.title}>{"Witamy! " + user.name}</h2>
        {questions?.map(question => <QuestionItem key={question.id+""} question={ question } onChange={onChangeAnswer(question.id+'')}/>)};
        <button className={classes.button} onClick={() => {
            sendResult({resumeQuestions: resultSet, user});
            history.push("/resume");
        }}>Zakończ quiz</button>
       </div>
    );
}

const useStyles = makeStyles((theme: Theme) => createStyles({

    root : {
        display : 'flex',
        justifyContent : 'center',
        flexDirection : 'column',
        alignItems : 'center',
        background : theme.palette.background.paper,
        minHeight: '100vh',
    },
    form_container : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        minHeight: '35vh',
        minWidth: '30vw',
        border: '5px solid white',
        borderRadius : '12px',
    },
    title: {
        color: theme.palette.secondary.main,
        fontSize: 40
    },
    button: {
        backgroundColor: theme.palette.secondary.main,
        padding: "20px 60px",
        marginBottom: 10,
        borderRadius: "10px 25px",
        fontSize: 20,
        border: "none",
        color: theme.palette.background.paper
    }

  }));


export default connector(QuizPage);