import server from "./src/app.js";
import { sequelize } from "./src/dbConnection.js";

const port = process.env.PORT || 3001;

const runServer = async () => {
  try {
    await sequelize.sync({ alter: true });
    if (process.env.VERCEL !== 1) {
      server.listen(port, () => {
        console.log("Server raised on port:", port);
      });
    }
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

runServer();


export default server; // Esto es lo que espera Vercel
