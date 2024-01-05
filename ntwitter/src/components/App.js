import AppRouter from "components/Router";
import { useState, useEffect } from "react";
import {authService} from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user0bj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

   return (
    <>
    {init ? (
       <AppRouter isLoggedIn={isLoggedIn} user0bj={user0bj}/>
    ):(
      "initializing..."
      )}
    <footer>&copy; {new Date().getFullYear()} Twitter</footer>
    </>
  );
}

export default App;