import server from "./src/app.js";
import sequelize from "./src/dbConnection.js";

const PORT = 3001;

const runServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connection has been established successfully.");
    server.listen(PORT, () => {
      console.log("Server raised at port: " + PORT);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

runServer();
