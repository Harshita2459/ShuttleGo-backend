// // const mongoose = require("mongoose");

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

// // module.exports = connectDatabase;




// const mongoose = require("mongoose");

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

// module.exports = connectDatabase;











const mongoose = require("mongoose");

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

module.exports = connectDatabase;
