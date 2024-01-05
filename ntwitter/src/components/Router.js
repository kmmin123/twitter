import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "./Navigation";
import Profile from "routes/Profile";

const AppRouter = ({isLoggedIn, user0bj}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (
                    <>
                    <Route exact path="/" element={<Home user0bj={user0bj}/>}>
                    </Route>
                    <Route exact path="/profile" element={<Profile />}>
                    </Route>
                    </>
                ) : (
                    <>
                    <Route exact path="/" element={<Auth />}>
                    </Route>
                    </>
                )}
            </Routes>
        </Router>
         );
        };
        export default AppRouter;