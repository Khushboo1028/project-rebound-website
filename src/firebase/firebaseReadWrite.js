import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

const writeData = (collectionName, documentName) => {
  let docRef = doc(db, collectionName, documentName);

  setDoc(docRef, { capital: true }, { merge: true });
};
