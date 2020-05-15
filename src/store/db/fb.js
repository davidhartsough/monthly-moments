import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import config from "./config";
import { currentMonth } from "../../date-utils";

let _db = null;
let _auth = null;
let _uid = null;

export function initDatabase() {
  if (firebase.apps.length === 0) firebase.initializeApp(config);
  _db = firebase.firestore();
  _auth = firebase.auth();
}

export const db = () => _db;

export const auth = () => _auth;

export const signInOptions = [
  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  firebase.auth.EmailAuthProvider.PROVIDER_ID,
];

export const setUID = (uid) => {
  _uid = uid;
};

export const getUID = () => _uid;

export function fetchProfile() {
  return _db
    .collection("profiles")
    .where("uid", "==", _uid)
    .get()
    .then(({ docs }) => docs[0])
    .catch(console.warn);
}

export function getPeople(ids) {
  return new Promise((resolve, reject) => {
    return Promise.all(ids.map((id) => getPerson(id)))
      .then(resolve)
      .catch(reject);
  });
}

function getPerson(id) {
  return _db
    .collection("profiles")
    .doc(id)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        throw new Error(`No profile found for: ${id}`);
      }
      return doc.data();
    });
}

export function getPeopleByQuery(query) {
  return _db
    .collection("profiles")
    .where("searchTerms", "array-contains", query)
    .get()
    .then(({ docs }) => docs.map(mapDocs))
    .catch((err) =>
      console.warn(`Error getting moments by query ("${query}") : `, err)
    );
}

const mapDocs = (doc) => ({
  id: doc.id,
  ...doc.data(),
});

export function getThisMonthsMoments() {
  return _db
    .collection("moments")
    .where("uid", "==", _uid)
    .where("month", "==", currentMonth)
    .get()
    .then(({ docs }) => docs.map(mapDocs))
    .catch((e) => console.warn("Error getting this month's moments: ", e));
}

export function getRecap(month, uid) {
  return _db
    .collection("moments")
    .where("uid", "==", uid)
    .where("month", "==", month)
    .get()
    .then(({ docs }) => docs.map(mapDocs))
    .catch((e) =>
      console.warn(
        `Error getting monthly moments recap (${month}, ${uid}) : `,
        e
      )
    );
}

export function createMoment(moment) {
  const newMoment = { uid: _uid, ...moment };
  return _db
    .collection("moments")
    .add(newMoment)
    .then(({ id }) => ({
      id,
      ...newMoment,
    }))
    .catch((err) => console.warn(`Error creating moment: `, err));
}

export function updateMoment(id, updates) {
  return _db
    .collection("moments")
    .doc(id)
    .update(updates)
    .then(() => id)
    .catch((err) => console.warn(`Error updating moment (${id}) : `, err));
}

export function deleteMoment(id) {
  return _db
    .collection("moments")
    .doc(id)
    .delete()
    .then(() => id)
    .catch((err) => console.warn(`Error deleting moment (${id}) : `, err));
}
