import {createMuiTheme} from "@material-ui/core/styles"

import {MuiThemeProvider } from "@material-ui/core/styles";
import AppRouter from "../Routes/AppRouter";

const theme = createMuiTheme({
    palette : {
        background : {
            paper: '#161A31',
        },
        text :{
            primary : '#616A94',
            secondary : '#F3F6FB',
        }
    }
});

const Theming = () : JSX.Element =>{
    return(
        <MuiThemeProvider theme={theme} >
            <AppRouter/>
        </MuiThemeProvider>
    );
}

export default Theming;

