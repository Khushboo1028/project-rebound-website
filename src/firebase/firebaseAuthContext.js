import React, { createContext, useState, useEffect } from "react";
import { auth } from "./firebase";
// export const AuthContext = createContext({
//   userPresent: false,
//   user: null,
//   listener: null
// });

// export default function FirebaseAuthContext(props) {
//   let [state, changeState] = useState({
//     userDataPresent: false,
//     user: null,
//     listener: null
//   });

//   useEffect(() => {
//     if (state.listener == null) {
//       changeState({
//         ...state,
//         listener: auth.onAuthStateChanged((user) => {
//           if (user) {
//             changeState((oldState) => ({
//               ...oldState,
//               userDataPresent: true,
//               user: user
//             }));
//           } else {
//             changeState((oldState) => ({
//               ...oldState,
//               userDataPresent: true,
//               user: null
//             }));
//           }
//         })
//       });
//     }
//     return () => {
//       if (state.listener) state.listener();
//     };
//   }, []);

//   console.log(state);
//   return (
//     <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
//   );
// }

// export const AuthContext = React.createContext();

// export const FirebaseAuthContext = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [pending, setPending] = useState(true);

//   useEffect(() => {
//     auth().onAuthStateChanged((user) => {
//       if (user) {
//         setCurrentUser(user);
//       }
//     });
//   }, []);

//   if (pending) {
//     return <>Loading...</>;
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
