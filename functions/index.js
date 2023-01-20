const functions = require("firebase-functions");
const app = require("express")();

const { getAllTodos } = require("./APIs/todos");
app.get("/todos", getAllTodos);
exports.api = functions.https.onRequest(app);

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

// https://us-central1-project-rebound.cloudfunctions.net/helloWorld
