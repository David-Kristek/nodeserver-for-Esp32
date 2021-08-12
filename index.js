const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
const { socketConnection } = require("./Sockets");
const http = require("http").Server(app);

const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

app.get("/", (req, res) => {
  res.send("Lets go !");
});
app.use("/senzor_data", require("./routes/senzors"));
app.use("/mobileSenzor", require("./routes/mobileSenzor"));

http.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
  //   database connection
});

socketConnection(io);
