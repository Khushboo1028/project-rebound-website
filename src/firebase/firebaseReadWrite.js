import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

// const docData = {
//   stringExample: "Hello world!",
//   booleanExample: true,
//   numberExample: 3.14159265,
//   dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
//   arrayExample: [5, true, "hello"],
//   nullExample: null,
//   objectExample: {
//       a: 5,
//       b: {
//           nested: "foo"
//       }
//   }
// };
const addData = (collectionName, documentName, docData) => {
  let docRef = doc(db, collectionName, documentName);

  setDoc(docRef, docData, { capital: true }, { merge: true });
};
