import { Fragment } from 'react';
import { useSelector  } from 'react-redux'; // read value from store

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App() {
  // calling useSelector here
  const isAuth= useSelector(state => state.auth.isAuthenticated); // auth is identifier and isAuthenticated is property
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth/>}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
    
  );
}

export default App;
