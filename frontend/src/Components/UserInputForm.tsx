import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import {UserInterface} from '../Interfaces/userInterface';
import { useHistory } from 'react-router';

interface userInputFormPropsTypes {
    saveUser : (user : UserInterface) => void,
}

const UserInputForm  = ({saveUser} : userInputFormPropsTypes)  => {

    const classes = useStyles();
    const history = useHistory();

    return(
        <div>
            <Formik
                initialValues={{name: '', email: ''}}
                onSubmit={(values : UserInterface) =>  {
                    saveUser(values);
                    history.push('/quiz');
                }}
                >
                {
                ({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                    
                    <input
                        className={classes.formInput}
                        placeholder='name'
                        required
                        onChange={handleChange}
                        name="name"
                        value={values.name}
                    />

                    <input
                        className={classes.formInput}
                        placeholder='e-mail'
                        required
                        onChange={handleChange}
                        name="email"
                        value={values.email}
                    />

                    <Button className={classes.formButton} variant="contained" color="secondary" type="submit">
                    START THE QUIZ!
                    </Button>

                    </form>
                )
                }
            </Formik>
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) => createStyles({


    formInput : {
         marginLeft : '25px',
         marginRight : '25px',
         marginTop : '15px',
         marginBottom : '10px',

         display : 'block',
         height : '40px',
         width : '300px',
    },
    formButton : {

        marginLeft : '25px',
        marginTop : '15px',
        marginBottom : '10px',
        marginRight : '25px',
        width : '300px',
        height : '75px',
        borderRadius : '12px',
    }
  }));

export default UserInputForm;