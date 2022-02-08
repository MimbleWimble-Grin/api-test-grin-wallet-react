import {useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Views from './views';
import { magic } from 'lib/magic';


import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                             //icons
import 'primeflex/primeflex.css';

import { UserContext } from 'lib/UserContext';

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    magic.user.isLoggedIn().then((isLoggedIn) => {
      isLoggedIn
        ? magic.user.getMetadata().then((userData) => setUser(userData))
        : setUser({ user: null });
    });
  }, []);
  return (
    <>
    <Router>
      <Switch>
        <UserContext.Provider value={[user,setUser]}>
        <Route path="/" component={Views} />
        </UserContext.Provider>
      </Switch>
    </Router>
    </>
  );
}

export default App;
