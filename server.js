require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToMongo = require("./database/db.js");


const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));



(async () => {
  try {
    connectToMongo()
    AllRoutes();
  } catch (error) {
    console.log("Error:", error);
  }
})();

// YOU CAN ADD MORE ROUTES THERE
function AllRoutes() {
  try {
    require("./routes/auth.routes")(app);
  } catch (error) {
    console.log("ERROR", error);
  }
}



app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});
