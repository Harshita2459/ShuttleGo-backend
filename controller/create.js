// // // const Shuttle = require("../models/shuttle");
// // // const mongoose = require("mongoose");

// // // const createShuttle = async (req, res) => {
// // //     console.log("-------------createShuttle------------");
// // //     console.log(req.body);
// // //     const { name, maxCount, campus, phoneNo } = req.body;

// // //     try {
// // //         const shuttle = new Shuttle({
// // //             Name: name,
// // //             maxCount: parseInt(maxCount),
// // //             Campus: parseInt(campus),
// // //             PhoneNo: phoneNo,
// // //         });
// // //         await shuttle.save();
// // //         console.log("Saved");
// // //         return true;
// // //     }
// // //     catch (error) {
// // //         console.log(error);
// // //         return false;
// // //     }
// // // };
// // // module.exports = createShuttle;





// // const Shuttle = require("../models/shuttle");
// // const mongoose = require("mongoose");

// // const createShuttle = async (req, res) => {
// //     console.log("-------------createShuttle------------");
// //     console.log(req.body);
// //     const { name, maxCount, campus, phoneNo } = req.body;

// //     try {
// //         const shuttle = new Shuttle({
// //             Name: name,
// //             maxCount: parseInt(maxCount),
// //             Campus: parseInt(campus),
// //             PhoneNo: phoneNo,
// //         });
// //         await shuttle.save();
// //         console.log("Saved");
// //         return true;
// //     }
// //     catch (error) {
// //         console.log(error);
// //         return false;
// //     }
// // };
// // module.exports = createShuttle;










// const Shuttle = require("../models/shuttle");
// const mongoose = require("mongoose");

// const createShuttle = async (req, res) => {
//     console.log("-------------createShuttle------------");
//     console.log(req.body);
//     const { name, maxCount, campus, phoneNo } = req.body;

//     try {
//         const shuttle = new Shuttle({
//             Name: name,
//             maxCount: parseInt(maxCount),
//             Campus: parseInt(campus),
//             PhoneNo: phoneNo,
//         });
//         await shuttle.save();
//         console.log("Saved");
//         return true;
//     }
//     catch (error) {
//         console.log(error);
//         return false;
//     }
// };
// module.exports = createShuttle;







const Shuttle = require("../models/shuttle");
const mongoose = require("mongoose");

const createShuttle = async (req, res) => {
    console.log("-------------createShuttle------------");
    console.log(req.body);
    const { name, maxCount, campus, phoneNo } = req.body;

    try {
        const shuttle = new Shuttle({
            Name: name,
            maxCount: parseInt(maxCount),
            Campus: parseInt(campus),
            PhoneNo: phoneNo,
        });
        await shuttle.save();
        console.log("Saved");
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};
module.exports = createShuttle;