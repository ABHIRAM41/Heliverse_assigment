import express from "express";
import env from "dotenv";
import userRouter from "./Routers/userRouter.js";
import teamRouter from "./Routers/teamRouter.js";
import { dbconnect } from "./config/db.js";
env.config();

dbconnect();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send({ hello: "as" });
});
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/team", teamRouter);


app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});


