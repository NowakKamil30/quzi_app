import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const WelcomingScreen = () =>{

    const classes = useStyles();

    return(
        <>
            <h1 className={classes.headerText}> TEST YOUR PROGRAMMING KNOWLEDGE!</h1>
            <Button
                component={ Link } to="/form"
                variant="contained"
                color="secondary"
                className={classes.buttonToEnroll}
            >
            LET'S GO!
            </Button>
            <p className={classes.authorsText}> Quiz created by Kamil Nowak, Bartosz Gabryjołek, Maciej Musial</p>
        </>
    );
}

const useStyles = makeStyles((theme: Theme) => createStyles({

    headerText : {
        color : theme.palette.text.primary,
        marginLeft : '1%',
        marginRight : '3%',
    },
    authorsText : {
        color : theme.palette.text.primary,
        marginLeft : '5%',
        marginRight : '3%',
    },
    buttonToEnroll : {
        margin : '0 50%',
        borderRadius : '12px',
        width : '40%',
    },
    
  }));


export default WelcomingScreen;