import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAm5pAwUDWFh3UFz0pjBmo_Dfwc0-3EQf8",
  authDomain: "catch-of-the-day-c5a46.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-c5a46-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }

export default base;