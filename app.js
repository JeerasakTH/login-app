const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const homeController = require("./controllers/home-controller");
const pageNotFoundController = require("./controllers/page-not-found-controller");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "views");
app.use(authRoute);

app.get("/", homeController);
app.get("*", pageNotFoundController);

const DB =
  "mongodb+srv://Jeerasak:Pp8Ap93fgZZBuvjo@cluster0.i4px3.mongodb.net/loginApp?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected!");
  })
  .catch((e) => {
    console.log("Cannot connect to DB!", e);
  });

app.listen(port, () => {
  console.log("listening on port", port);
});
