
const functions = require("firebase-functions");
const admin = require("firebase-admin");
require("dotenv").config();

const serviceAccountKey = require("./serviceAccountKey.json");
const express = require("express");
const app = express();


// body perser for Json data
app.use(express.json());

// cross origin

const cors = require("cors");
app.use(cors({Origin: true}));
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*"); next();
});

// firbase credential
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

// api endpoint
app.get("/", (_req, res) =>{
  return res.send("Hello world");
});

const userRoute = require("./routes/user");
app.use("/api/users", userRoute);
exports.app = functions.https.onRequest(app);

