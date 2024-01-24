import { json } from "express";

import { UsersRouter } from "./routes/users";

import { cardsRouter } from "./routes/cards";

import { connect } from "./database/connection";

import express from "express";

import bodyParser from "body-parser";

import { configDotEnv } from "./config";

import { homeRouter } from "./routes/home";

import cors from 'cors';


configDotEnv();

connect();

const app = express();

app.use(
    cors({
    origin: "http://localhost:3000/",
})
);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))

app.use(json());

app.use("/", homeRouter)

app.use("/users", UsersRouter);

app.use("/cards", cardsRouter);

app.listen(8080, () => {
    console.log("App is running")
});

