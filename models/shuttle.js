// // const mongoose = require("mongoose");

// // const shuttleSchema = new mongoose.Schema({
// //     Name: {
// //         type: String,
// //         required: true,
// //         // unique: true
// //     },
// //     maxCount: {
// //         type: Number,
// //         required: true
// //     },
// //     Campus: {
// //         type: Number,
// //         required: true,
// //     },
// //     PhoneNo: {
// //         type: String,
// //         required: true
// //     },
// //     currentbookings: [],
// // }, {
// //     timestamps: true,
// // })

// // const Shuttle = mongoose.model("shuttle", shuttleSchema)

// // module.exports = Shuttle;






// const mongoose = require("mongoose");

// const shuttleSchema = new mongoose.Schema({
//     Name: {
//         type: String,
//         required: true,
//         // unique: true
//     },
//     maxCount: {
//         type: Number,
//         required: true
//     },
//     Campus: {
//         type: Number,
//         required: true,
//     },
//     PhoneNo: {
//         type: String,
//         required: true
//     },
//     currentbookings: [],
// }, {
//     timestamps: true,
// })

// const Shuttle = mongoose.model("shuttle", shuttleSchema)

// module.exports = Shuttle;












const mongoose = require("mongoose");

const shuttleSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        // unique: true
    },
    maxCount: {
        type: Number,
        required: true
    },
    Campus: {
        type: Number,
        required: true,
    },
    PhoneNo: {
        type: String,
        required: true
    },
    currentbookings: [],
}, {
    timestamps: true,
})

const Shuttle = mongoose.model("shuttle", shuttleSchema)

module.exports = Shuttle;