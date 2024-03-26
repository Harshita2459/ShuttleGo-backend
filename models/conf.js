// // const mongoose = require("mongoose");
// // const { Schema } = mongoose;

// // const confSchema = new Schema(
// //     {
// //         title: { type: String, required: true },
// //         accepted: { type: Boolean, required: true },
// //         studId: { type: Schema.Types.ObjectId, ref: "user", required: true },
// //     },
// //     { timestamps: true }
// // );

// // const Conf = mongoose.model("Conf", confSchema);

// // module.exports = Conf;







// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const confSchema = new Schema(
//     {
//         // title: { type: String, required: true },
//         // accepted: { type: Boolean, required: true },
//         // studId: { type: Schema.Types.ObjectId, ref: "user", required: true },
//         name: { type: String, required: true },
//         email: { type: String, required: true },
//         campus: { type: String, required: true },
//         phoneNo: { type: String, required: true },
//         image: { type: String, required: true },
//         accepted: { type: Boolean, required: true },
//     },
//     { timestamps: true }
// );

// const Conf = mongoose.model("Conf", confSchema);

// module.exports = Conf;






const mongoose = require("mongoose");
const { Schema } = mongoose;

const confSchema = new Schema(
    {
        // title: { type: String, required: true },
        // accepted: { type: Boolean, required: true },
        // studId: { type: Schema.Types.ObjectId, ref: "user", required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        campus: { type: String, required: true },
        phoneNo: { type: String, required: true },
        image: { type: String, required: true },
        accepted: { type: Boolean, required: true },
    },
    { timestamps: true }
);

const Conf = mongoose.model("Conf", confSchema);

module.exports = Conf;
