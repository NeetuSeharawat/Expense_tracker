
import SignUpPage from './Components/SignUpPage/SignUpPage';
import LoginPage from './Components/LoginPage/LoginPage';
import IncompleteProfile from './Components/LoginPage/IncompleteProfile';
import UpdateProfile from './Components/LoginPage/UpdateProfile';
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>

    <SignUpPage />
    <LoginPage/>
    <IncompleteProfile />
    <UpdateProfile />

    </Fragment>
  );
}

export default App;
