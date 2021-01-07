import React, { useContext } from "react";
import "./_oauth.scss";
import gLogo from "../../../Assets/logos/Group 573.png";
import logo from "../../../Assets/logos/Group 1329.png";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../configs/firebase.config";
import { UserContext } from "../../../App";
import { Link, useHistory, useLocation } from "react-router-dom";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const OAuth = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (res) {
        const user = res.user;
        const newUser = {
          name: user.displayName,
          email: user.email,
          img: user.photoURL,
        };
        storeAuthToken();
        setLoggedInUser(newUser);
      })
      .catch(function (error) {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then((idToken) => {
        sessionStorage.setItem("authToken", idToken);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container d-flex justify-content-center">
      <div className="text-center">
        <Link to="/">
          <img src={logo} alt="" className="my-5" />
        </Link>
        <div className="auth-container d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h4 className="mb-5">Login with</h4>
            <div
              className="d-flex auth-google"
              onClick={(e) => googleSignIn(e)}
            >
              <img src={gLogo} alt="" className="img img-fluid p-2 mr-5" />
              <p className="m-auto">Continue with google</p>
            </div>
            <div>
              <small>
                Don’t have an account?{" "}
                <span className="account-text">Create an account</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OAuth;
