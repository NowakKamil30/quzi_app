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
import { Score } from '../Interfaces/Score';


interface MapDispatcherToProps {

}

interface  MapStateToProps {
    score: Score
}

const mapStateToProps = (state : ReduceTypes) : MapStateToProps  =>({
    score: state.resumeReducer.score
  });
  

const mapDispatchToProps = (dispatch : ThunkDispatch<{}, {}, any>) : MapDispatcherToProps =>({

  });

const connector =  connect(mapStateToProps,mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;



const ScorePage : React.FC<PropsFromRedux> = ({score}) =>{

    const classes = useStyles();
    const history = useHistory();

    return(
       <div className={classes.root}>
           <h2 className={classes.title}>Ilość punktów: {score.score + "/" + score.maxPoints}</h2>
           <h3 className={classes.subTitle}>{score.message}</h3>
           <button className={classes.button} onClick={() => {
               history.push("/");
           }}>Zacznij jeszcze raz</button>
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
    subTitle: {
        color: theme.palette.secondary.main,
        fontSize: 30
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


export default connector(ScorePage);