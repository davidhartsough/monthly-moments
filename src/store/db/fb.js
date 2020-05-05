import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import config from "./config";

let _db = null;
let _auth = null;
let _uid = null;
let _people = [];

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
    .then(({ docs }) => {
      const p = docs[0];
      return p;
    })
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

const mapDocs = (doc) => ({
  id: doc.id,
  ...doc.data(),
});

export function dbGetMyMomentsByMonth(month) {
  return _db
    .collection("moments")
    .where("uid", "==", _uid)
    .where("month", "==", month)
    .get()
    .then(({ docs }) => docs.map(mapDocs))
    .catch((e) => console.warn("Error getting current moments: ", e));
}

export function dbCreateMoment(moment) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 500);
  });
}

export function dbUpdateMoment(moment) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 500);
  });
}

export function dbDeleteMoment(moment) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 500);
  });
}

/*
function filterPeople(people, usernames) {
  return people.filter(({ username }) => usernames.includes(username));
}
*/

/*


export function getDocs(collection) {
  return _db
    .collection(collection)
    .where("uid", "==", _uid)
    .get()
    .then(({ docs }) => docs.map(mapDocs))
    .catch((err) => console.warn(`Error getting ${collection}: `, err));
}

export function getDoc(collection, id) {
  return _db
    .collection(collection)
    .doc(id)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        throw new Error(`No doc found for the id: ${id}`);
      }
      return {
        id: doc.id,
        ...doc.data(),
      };
    .catch((err) =>
      console.warn(`Error getting doc from ${collection}: `, err)
    );
}

export function createDoc(collection, item) {
  const newItem = { uid: _uid, ...item };
  return _db
    .collection(collection)
    .add(newItem)
    .then(({ id }) => ({
      id,
      ...newItem,
    }))
    .catch((err) => console.warn(`Error adding to ${collection}: `, err));
}

export function deleteDoc(collection, id) {
  return _db
    .collection(collection)
    .doc(id)
    .delete()
    .then(() => id)
    .catch((err) => console.warn("Error deleting: ", err));
}

export function updateDoc(collection, id, updates) {
  return _db
    .collection(collection)
    .doc(id)
    .update(updates)
    .then(() => id)
    .catch((err) => console.warn("Error updating doc: ", err));
}
*/

/*
export function getMomentsByMonth(month) {
  return _db
    .collection("moments")
    .where("uid", "==", _uid)
    .where("date", ">=", `${month}-01`)
    .where("date", "<=", `${month}-31`)
    .orderBy("date", "desc")
    .get()
    .then(({ docs }) => docs.map(mapDocs))
    .catch((e) => console.warn("Error getting moments by month: ", e));
}

export function getMomentsByQuery(query, type) {
  return _db
    .collection("moments")
    .where("uid", "==", _uid)
    .where(type, "array-contains", query)
    .get()
    .then(({ docs }) => docs.map(mapDocs))
    .catch((err) => console.warn("Error getting moments by query: ", err));
}
*/
