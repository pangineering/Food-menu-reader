// {
//     getAuth,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//    }

const { app, admin } = require("../db");
const firebase = require("firebase/app");
const { getAuth, signout } = require("firebase-admin/auth");
//const firebaseAdmin = require("firebase-admin");

const firebase_auth = require("firebase/auth");
const firebaseAdmin = require("firebase-admin/app");
const { signOut } = require("firebase/auth");

const signUp = async (req, res, next) => {
  try {
    const auth = firebase_auth.getAuth();
    const data = req.body;
    const email = data.email;
    const password = data.password;
    const app_type = data.app_type;
    firebase_auth
      .createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //res.send("Sign Up Successfully");
      })

      .then(
        getAuth()
          .createUser({
            email: email,
            password: password,
          })
          .then((userRecord) => {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log("Successfully created new user:", userRecord.uid);
            var role = { merchant: false, vendor: false };
            var m = false;
            var v = false;
            if (app_type == "merchant") {
              m = true;
            } else if (app_type == "vendor") {
              v = true;
            } else {
              m = false;
              v = false;
            }
            //console.log(role)
            getAuth()
              .setCustomUserClaims(userRecord.uid, { merchant: m, vendor: v })
              .then(() => {
                //const msg = "Sign Up Successfully" + " as " +;
                res.send("success");

                // The new custom claims will propagate to the user's ID token the
                // next time a new one is issued.
              });
          })
          .catch((error) => {
            console.log("Error creating new user:", error);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          })
      );
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const signIn = async (req, res, next) => {
  try {
    const auth = firebase_auth.getAuth();
    const data = req.body;
    const email = data.email;
    const password = data.password;
    firebase_auth
      .signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        res.send("Sign In Successfully");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.send(errorMessage);
      });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const logOut = async (req, res, next) => {
  try {
    const sessionCookie = req.cookies.session || "";
    res.clearCookie("session");
    // Revoke session too. Note this will revoke all user sessions.
    if (sessionCookie) {
      firebase_auth
        .verifySessionCookie(sessionCookie, true)
        .then(function (decodedClaims) {
          return admin.auth().revokeRefreshTokens(decodedClaims.sub);
        })
        .then(function () {
          // Redirect to login page on success.
          res.send("log out");
        })
        .catch(function () {
          // Redirect to login page on error.
          res.send("/error");
        });
    } else {
      // Redirect to login page when no session cookie available.
      res.send("/no session cookie available");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  signUp,
  signIn,
  logOut,
};

/*
    const auth = firebase_auth.getAuth();
    signOut(auth).then(() => {
      
      
    }).catch((error) => {
      // An error happened.
    });
*/
