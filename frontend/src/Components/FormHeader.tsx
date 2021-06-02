import { createStyles, makeStyles, Theme } from '@material-ui/core';


const FormHeader = () =>{

    const classes = useStyles();

    return(
        <>
            <h3 className={classes.headerText}> Introduce yourself </h3>
        </>
    );
}

const useStyles = makeStyles((theme: Theme) => createStyles({

    headerText : {
        color : theme.palette.text.secondary,
        fontFamily : 'Verdana, sans-serif',
    },

}));

export default FormHeader;