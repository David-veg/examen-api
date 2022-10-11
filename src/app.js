import express from "express";
import morgan from "morgan";
import escuelaroutes from "./routes/escuela.routes";
import facultadroutes from "./routes/facultad.controllers";
import estudiante from "./routes/estudiante";

const app = express();
var cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(
    "<p>Hola</p>"
  );
});

app.use("/estudiante", estudiante);
app.use("/escuela", escuelaroutes);
app.use("/facultad", facultadroutes);

export default app;
