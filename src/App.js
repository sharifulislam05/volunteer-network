import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import OAuth from "./components/Shared/OAuth/OAuth";
import { createContext, useState } from "react";
import Registration from "./components/Registration/Registration";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";
import Admin from "./components/Admin/Admin/Admin";
import UserEvents from "./components/UserEvents/UserEvents";
import jwt_decode from "jwt-decode";

export const UserContext = createContext();

function App() {
  const isLogin = () => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      return { name: "", email: "", img: "" };
    } else {
      const decoded = jwt_decode(token);
      const user = {
        name: decoded.name,
        email: decoded.email,
      };
      return user;
    }
  };
  const [loggedInUser, setLoggedInUser] = useState(isLogin());

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <OAuth />
          </Route>
          <PrivateRoute path="/event/:eventId">
            <Registration />
          </PrivateRoute>
          <PrivateRoute exact path="/event">
            <Registration />
          </PrivateRoute>
          <Route path="/admin">
            <Admin />
          </Route>
          <PrivateRoute path="/userEvents">
            <UserEvents />
          </PrivateRoute>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
