// // // const mongoose = require("mongoose");

// // // const userSchema = new mongoose.Schema({

// // //     name: { type: String, required: true },
// // //     email: { type: String, required: true, unique: true },
// // //     password: {
// // //         type: String,
// // //         required: true,
// // //     },
// // //     phone: {
// // //         type: Number,
// // //         required: true,
// // //     },
// // //     dob: {
// // //         type: Date,
// // //         required: true,
// // //     },
// // //     role: {
// // //         type: String,
// // //         required: true,
// // //         default: "visitor"
// // //     }
// // // });

// // // const User = new mongoose.model("user", userSchema);


// // // module.exports = User;








// // const mongoose = require("mongoose");
// // const { Schema } = mongoose;

// // const userSchema = new mongoose.Schema({
// //     name: { type: String, required: true },
// //     email: { type: String, required: true, unique: true },
// //     password: {
// //         type: String,
// //         required: true,
// //     },
// //     phone: {
// //         type: Number,
// //         required: true,
// //     },
// //     dob: {
// //         type: Date,
// //         required: true,
// //     },
// //     role: {
// //         type: String,
// //         required: true,
// //         default: "visitor",
// //     },
// //     confid: {
// //         type: Schema.Types.ObjectId,
// //         ref: "conf",
// //         required: true,
// //     },
// // });

// // const User = new mongoose.model("user", userSchema);

// // module.exports = User;













// // const mongoose = require("mongoose");

// // const userSchema = new mongoose.Schema({

// //     name: { type: String, required: true },
// //     email: { type: String, required: true, unique: true },
// //     password: {
// //         type: String,
// //         required: true,
// //     },
// //     phone: {
// //         type: Number,
// //         required: true,
// //     },
// //     dob: {
// //         type: Date,
// //         required: true,
// //     },
// //     role: {
// //         type: String,
// //         required: true,
// //         default: "visitor"
// //     }
// // });

// // const User = new mongoose.model("user", userSchema);


// // module.exports = User;








// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: {
//         type: String,
//         required: true,
//     },
//     phone: {
//         type: Number,
//         required: true,
//     },
//     dob: {
//         type: Date,
//         required: true,
//     },
//     role: {
//         type: String,
//         required: true,
//         default: "visitor",
//     },
//     confid: {
//         type: Schema.Types.ObjectId,
//         ref: "conf",
//         required: true,
//     },
// });

// const User = new mongoose.model("user", userSchema);

// module.exports = User;









const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "visitor",
    },
    confid: {
        type: Schema.Types.ObjectId,
        ref: "conf",
        required: true,
    },
});

const User = new mongoose.model("user", userSchema);

module.exports = User;
