import { updateDoc, setDoc } from "firebase/firestore";

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

// let docRef = doc(db, collectionName, documentName);
export const addData = async (docRef, docData) => {
  await setDoc(docRef, docData, { capital: true }, { merge: true })
    .then(console.log("Document added"))
    .catch((e) => {
      console.log("error is ", e);
    });
};

export const updateData = async (docRef, docData) => {
  await updateDoc(docRef, docData, { capital: true }, { merge: true })
    .then(console.log("Document updated"))
    .catch((e) => {
      console.log("error is ", e);
    });
};

// export const readData = async (docRef) => {
//   const unsub = onSnapshot(docRef, (doc) => {
//     const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
//     console.log(" data: ", doc.data());
//     return doc.data;
//   });

//   return unsub;
// };
