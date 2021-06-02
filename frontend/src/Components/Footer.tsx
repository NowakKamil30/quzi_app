import { createStyles, makeStyles, Theme } from '@material-ui/core';

const Footer = () => {

    const classes = useStyles();

    return(
        <>
            <p className={classes.footerText} > University Of Green Mountain, WIEA 2021</p>
        </>
    );
}


const useStyles = makeStyles((theme: Theme) => createStyles({

    footerText : {
        color : theme.palette.text.secondary,
        marginTop : '1%',
        marginLeft : '10%',
    },

  }));


export default Footer;