import { createStyles, makeStyles, Theme } from '@material-ui/core';
import WelcomingScreen from '../Components/WelcomingScreen';
import Footer from '../Components/Footer';


const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        justifyContent : 'flex-start',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        minHeight: '100vh',
    },
    imageStyle : {
        alignSelf : 'flex-start',
        margin : '0px',
        padding : '0px',
        width : '100%',
        height : '500px',
    },
  }));


const IndexPage = () =>{

    const classes = useStyles();

    return(
       <>
        <div className={classes.root}>
        <img className={classes.imageStyle} src="indexPhoto.jpg" alt="BigCo Inc. logo"/>  
            <WelcomingScreen></WelcomingScreen>
            <Footer></Footer>
        </div>
       </>
    );
}




export default IndexPage;