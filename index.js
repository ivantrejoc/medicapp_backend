import server from "./src/app.js";

const PORT = 3001;

server.listen(PORT, () => {
  console.log("Server raised at port: " + PORT);
});
