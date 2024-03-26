// // const mongoose = require("mongoose");

// // const bookSchema = new mongoose.Schema({
// //     name: { type: String, required: true },
// //     email: { type: String, required: true },
// //     campus: { type: String, required: true },
// //     phoneNo: { type: Number, required: true },
// //     image: { type: String, required: true },
// // }, {
// //     timestamps: true,
// // })

// // const Book = mongoose.model("Book", bookSchema)

// // module.exports = Book;








// const mongoose = require("mongoose");

// const bookSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     campus: { type: String, required: true },
//     phoneNo: { type: Number, required: true },
//     image: { type: String, required: true },
// }, {
//     timestamps: true,
// })

// const Book = mongoose.model("Book", bookSchema)

// module.exports = Book;










const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    campus: { type: String, required: true },
    phoneNo: { type: Number, required: true },
    image: { type: String, required: true },
}, {
    timestamps: true,
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book;