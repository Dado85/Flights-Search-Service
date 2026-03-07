const express = require("express");
const { PORT } = require("./config/server-config");
const logger = require("./config/logger-config.js");
const apiRoutes = require("./Routes/index.js");
const setUpAndStartServer = async () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
    logger.info("sucessfully started the server", {});
  });
};
setUpAndStartServer();
