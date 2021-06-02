import {BrowserRouter as Router} from 'react-router-dom';
import IndexPage from '../Pages/IndexPage';
import FormPage from '../Pages/FormPage';
import {
    Route,
    Switch
  } from 'react-router-dom';



const AppRouter = () =>{
    return(
        <Router>
            <Switch>
                    <Route exact path='/'>
                        <IndexPage/>
                    </Route>
                    <Route path='/form'> 
                        <FormPage/>
                    </Route>
                    
            </Switch>
        </Router>
    );
}

export default AppRouter;