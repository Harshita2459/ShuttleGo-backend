// // // const Shuttle = require("../models/shuttle");
// // // const mongoose = require("mongoose");

// // // const bookShuttle = async (req, res) => {
// // //     console.log("-------------bookShuttle------------");
// // //     try {
// // //         const { campus, email } = req.body;
// // //         const shuttle = await Shuttle.findOne({ campus: campus });
// // //         if (shuttle) {
// // //             shuttle.currentbookings.push({ email: email });
// // //             await shuttle.save();
// // //             return res.status(201);
// // //         }
// // //     }
// // //     catch (error) {
// // //         console.log(error);
// // //         return false;
// // //     }
// // // };

// // // module.exports = bookShuttle;




// // const Shuttle = require("../models/shuttle");
// // const mongoose = require("mongoose");

// // const bookShuttle = async (req, res) => {
// //     console.log("-------------bookShuttle------------");
// //     try {
// //         const { campus, email } = req.body;
// //         const shuttle = await Shuttle.findOne({ campus: campus });
// //         if (shuttle) {
// //             shuttle.currentbookings.push({ email: email });
// //             await shuttle.save();
// //             return res.status(201);
// //         }
// //     }
// //     catch (error) {
// //         console.log(error);
// //         return false;
// //     }
// // };

// // module.exports = bookShuttle;








// const Shuttle = require("../models/shuttle");
// const mongoose = require("mongoose");

// const bookShuttle = async (req, res) => {
//     console.log("-------------bookShuttle------------");
//     try {
//         const { campus, email } = req.body;
//         const shuttle = await Shuttle.findOne({ campus: campus });
//         if (shuttle) {
//             shuttle.currentbookings.push({ email: email });
//             await shuttle.save();
//             return res.status(201);
//         }
//     }
//     catch (error) {
//         console.log(error);
//         return false;
//     }
// };

// module.exports = bookShuttle;











const Shuttle = require("../models/shuttle");
const mongoose = require("mongoose");

const bookShuttle = async (req, res) => {
    console.log("-------------bookShuttle------------");
    try {
        const { campus, email } = req.body;
        const shuttle = await Shuttle.findOne({ campus: campus });
        if (shuttle) {
            shuttle.currentbookings.push({ email: email });
            await shuttle.save();
            return res.status(201);
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = bookShuttle;