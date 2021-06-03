import {BrowserRouter as Router} from 'react-router-dom';
import IndexPage from '../Pages/IndexPage';
import FormPage from '../Pages/FormPage';
import {
    Route,
    Switch
  } from 'react-router-dom';
import QuizPage from '../Pages/QuizPage';
import ScorePage from '../Pages/ScorePage';



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
                    <Route path='/quiz'>
                        <QuizPage/>
                    </Route>
                    <Route path='/resume'>
                        <ScorePage/>
                    </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;