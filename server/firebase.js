var serverFirebase = require("firebase-admin");

var serviceAccount = require("./secrets/spin-off-fe3ac-firebase-adminsdk-ah6ar-d6fd2dde90.json");

serverFirebase.initializeApp({
  credential: serverFirebase.credential.cert(serviceAccount),
  databaseURL: "https://spin-off-fe3ac.firebaseio.com"
});

module.exports = serverFirebase;
