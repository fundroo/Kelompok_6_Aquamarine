const express = require("express"); 
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "some_secret_key",
    cookie: {},
  })
);

// Middleware untuk memetakan permintaan
app.use((req, res, next) => {
  res.locals.isLoggedIn = req.session.isLoggedIn;
  next();
});

// Koneksi ke database mongodb
mongoose.connect(
  "mongodb+srv://Kelompok_6:kelompok6aquamarine@cluster0.hjgrw.mongodb.net/Aquamarine?retryWrites=true&w=majority",
  (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Database terhubung");
    }
  }
);

// Routes
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const cartRouter = require("./routes/cart");
const wishlistRouter = require("./routes/wishlist");

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/cart", cartRouter);
app.use("/wishlist", wishlistRouter);

// Port untuk localhost
app.listen("3000", () => {
  console.log("Server sudah berjalan di port 3000");
});
