import express from "express";
import morgan from "morgan";
import cors from "cors";
import mainRouter from "./routes/index.js";

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/api", mainRouter);

server.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(cors({ credentials: true, origin: "*" }));

server.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";
  console.error(error);
  res.status(status).send(message);
});

export default server;
