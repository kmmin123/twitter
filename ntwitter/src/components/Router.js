import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {useState} from "react";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
    const [isLoggesdIn, setIsLoggedIn] = useState(true);
    return (
        <Router>
            <Routes>
                {isLoggesdIn ?(
                    <Route exact path="/" element={<Home />}>
                    </Route>
                ):(
                    <Route exact path="/" element={<Auth />}>
                    </Route>
                )}
            </Routes>
        </Router>
    );
};
export default AppRouter;