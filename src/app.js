import express from "express";
import morgan from "morgan";
import cors from "cors";
import mainRouter from "./routes/index.js";

const server = express();

const corsOptions = {
  origin:"http://localhost:5173",  
  credentials: true,
  optionSuccessStatus: 200
}
server.use(cors(corsOptions));
server.use(morgan("dev"));
server.use(express.json());
server.use("/api", mainRouter);

server.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";
  console.error(error);
  res.status(status).send(message);
});

export default server;
