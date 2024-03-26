// // const express = require("express");
// // const bodyParser = require("body-parser");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // const user = require("./routes/user");
// // const getAllShuttles = require("./controller/shuttle");
// // const createShuttle = require("./controller/create");
// // const app = express();
// // const bcrypt = require('bcrypt');
// // const jwt = require('jsonwebtoken');
// // const cookieParser = require('cookie-parser')
// // require('dotenv').config();
// // const morgan = require('morgan')
// // const createBooking = require('./controller/createBooking');

// // const url = process.env.URL;
// // // const url = "mongodb+srv://22052459:W5Og6SJZNMEFF7t7@cluster0.nmavgsc.mongodb.net/?retryWrites=true&w=majority"

// // const connectDatabase = async () => {
// //   if (mongoose.connection.readyState >= 1) {
// //     console.log("Already connected to MongoDB");
// //     return;
// //   }

// //   await mongoose.connect(url, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   });
// //   console.log("Connected to MongoDB");
// // };

// // app.use(morgan('dev'))
// // app.use(express.json())
// // app.use(cookieParser())
// // app.use(cors({
// //   origin: ["http://localhost:3000"],
// //   methods: ["GET", "POST"],
// //   credentials: true
// // }));
// // app.use((req, res, next) => {
// //   res.setHeader("Access-Control-Allow-Origin", "*");
// //   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
// //   );
// //   res.setHeader(
// //     "Access-Control-Allow-Methods",
// //     "GET, POST, PATCH, DELETE, OPTIONS"
// //   );
// //   next();
// // });
// // app.use(bodyParser.json());

// // app.use("/user", user);
// // app.use("/shuttles", getAllShuttles);
// // app.post("/createShuttle", createShuttle);
// // app.post('/createBooking', createBooking)


// // app.listen(5000, async () => {
// //   await connectDatabase();
// //   console.log("The Server is started");
// // });














// // const express = require("express");
// // const bodyParser = require("body-parser");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // const user = require("./routes/user");
// // const getAllShuttles = require("./controller/shuttle");
// // const createShuttle = require("./controller/create");
// // const app = express();
// // const bcrypt = require("bcrypt");
// // const jwt = require("jsonwebtoken");
// // const cookieParser = require("cookie-parser");
// // require("dotenv").config();
// // const morgan = require("morgan");
// // const createBooking = require("./controller/createBooking");
// // const confRoutes = require("./routes/conf");

// // // const url = process.env.URL;
// // const url =
// //   "mongodb+srv://22052459:W5Og6SJZNMEFF7t7@cluster0.nmavgsc.mongodb.net/?retryWrites=true&w=majority";

// // const connectDatabase = async () => {
// //   if (mongoose.connection.readyState >= 1) {
// //     console.log("Already connected to MongoDB");
// //     return;
// //   }

// //   await mongoose.connect(url, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   });
// //   console.log("Connected to MongoDB");
// // };

// // const corsConfig = {
// //   origin: "*",
// //   optionsSuccessStatus: 200,
// // };

// // app.use(morgan("dev"));
// // app.use(express.json());
// // app.use(cookieParser());
// // app.use(cors(corsConfig));
// // app.use((req, res, next) => {
// //   res.setHeader("Access-Control-Allow-Origin", "*");
// //   res.setHeader(
// //     "Access-Control-Allow-Headers",
// //     "Origin, X-Requested-With, Content-Type, Accept"
// //   );
// //   res.setHeader(
// //     "Access-Control-Allow-Methods",
// //     "GET, POST, PATCH, DELETE, OPTIONS"
// //   );
// //   next();
// // });
// // app.use(bodyParser.json());

// // app.use("/user", user);
// // app.use("/shuttles", getAllShuttles);
// // app.post("/createShuttle", createShuttle);
// // app.post("/createBooking", createBooking);
// // app.use("/conf", confRoutes);

// // app.listen(5000, async () => {
// //   await connectDatabase();
// //   console.log("The Server is started");
// // });











// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const user = require("./routes/user");
// const getAllShuttles = require("./controller/shuttle");
// const createShuttle = require("./controller/create");
// const app = express();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");
// require("dotenv").config();
// const morgan = require("morgan");
// const createBooking = require("./controller/createBooking");
// const confRoutes = require("./routes/conf");

// // const url = process.env.URL;
// const url =
//   "mongodb+srv://22052459:W5Og6SJZNMEFF7t7@cluster0.nmavgsc.mongodb.net/?retryWrites=true&w=majority";

// const connectDatabase = async () => {
//   if (mongoose.connection.readyState >= 1) {
//     console.log("Already connected to MongoDB");
//     return;
//   }

//   await mongoose.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log("Connected to MongoDB");
// };

// const corsConfig = { origin: "*", optionsSuccessStatus: 200 };
// app.use(morgan("dev"));
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors(corsConfig));
// // app.use((req, res, next) => {
// //   res.setHeader("Access-Control-Allow-Origin", "*");
// //   res.setHeader(
// //     "Access-Control-Allow-Headers",
// //     "Origin, X-Requested-With, Content-Type, Accept"
// //   );
// //   res.setHeader(
// //     "Access-Control-Allow-Methods",
// //     "GET, POST, PATCH, DELETE, OPTIONS"
// //   );
// //   next();
// // });
// app.use(bodyParser.json());

// app.use("/user", user);
// app.use("/shuttles", getAllShuttles);
// app.post("/createShuttle", createShuttle);
// app.post("/createBooking", createBooking);
// app.use("/conf", confRoutes);

// app.listen(5000, async () => {
//   await connectDatabase();
//   console.log("The Server is started");
// });















const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const user = require("./routes/user");
const getAllShuttles = require("./controller/shuttle");
const createShuttle = require("./controller/create");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const morgan = require("morgan");
const createBooking = require("./controller/createBooking");
const confRoutes = require("./routes/conf");

// const url = process.env.URL;
const url =
  "mongodb+srv://22052459:W5Og6SJZNMEFF7t7@cluster0.nmavgsc.mongodb.net/?retryWrites=true&w=majority";

const connectDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB");
    return;
  }

  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
};

const corsConfig = { origin: "*", optionsSuccessStatus: 200 };
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsConfig));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, DELETE, OPTIONS"
//   );
//   next();
// });
app.use(bodyParser.json());

app.use("/user", user);
app.use("/shuttles", getAllShuttles);
app.post("/createShuttle", createShuttle);
app.post("/createBooking", createBooking);
app.use("/conf", confRoutes);

app.listen(5000, async () => {
  await connectDatabase();
  console.log("The Server is started");
});
