// // // const Shuttle = require("../models/shuttle");
// // // const mongoose = require("mongoose");

// // // const getAllShuttles = async (req, res) => {
// // //     console.log("------------- getAllShuttles -------------")
// // //     try {
// // //         const shuttles = await Shuttle.find({});


// // //         console.log(shuttles);

// // //         res.status(200).json({ shuttles });
// // //     }
// // //     catch (error) {
// // //         return res.status(400).json({ message: error });
// // //     }
// // // };
// // // module.exports = getAllShuttles;





// // const Shuttle = require("../models/shuttle");
// // const mongoose = require("mongoose");

// // const getAllShuttles = async (req, res) => {
// //     console.log("------------- getAllShuttles -------------")
// //     try {
// //         const shuttles = await Shuttle.find({});


// //         console.log(shuttles);

// //         res.status(200).json({ shuttles });
// //     }
// //     catch (error) {
// //         return res.status(400).json({ message: error });
// //     }
// // };
// // module.exports = getAllShuttles;











// const Shuttle = require("../models/shuttle");
// const mongoose = require("mongoose");

// const getAllShuttles = async (req, res) => {
//     console.log("------------- getAllShuttles -------------")
//     try {
//         const shuttles = await Shuttle.find({});


//         console.log(shuttles);

//         res.status(200).json({ shuttles });
//     }
//     catch (error) {
//         return res.status(400).json({ message: error });
//     }
// };
// module.exports = getAllShuttles;








const Shuttle = require("../models/shuttle");
const mongoose = require("mongoose");

const getAllShuttles = async (req, res) => {
    console.log("------------- getAllShuttles -------------")
    try {
        const shuttles = await Shuttle.find({});


        console.log(shuttles);

        res.status(200).json({ shuttles });
    }
    catch (error) {
        return res.status(400).json({ message: error });
    }
};
module.exports = getAllShuttles;