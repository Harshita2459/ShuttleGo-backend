// // const conf = require("../models/conf");
// // const user = require("../models/user");

// // const newConf = async (req, res) => {
// //     const { title, accepted, email } = req.body;
// //     try {
// //         const findUser = await user.findOne({ email });
// //         const newConf = new conf({ title, accepted, studId: findUser._id });
// //         await newConf.save();
// //         if (!newConf) throw new Error("An error occured");
// //         res.send(newConf);
// //     } catch (e) {
// //         res.send("Error");
// //     }
// // };

// // const getConf = async (req, res) => {
// //     try {
// //         const conff = await conf.find({});
// //         if (!conff) throw new Error("No conf found");
// //         res.json(conff);
// //     } catch (e) {
// //         console.log(e);
// //         res.send("Error");
// //     }
// // };

// // const getid = async (req, res) => {
// //     const { id } = req.params;
// //     try {
// //         if (!id) throw new Error("Id is required");
// //         const conff = await conf.find({ studId: id });
// //         if (!conff) throw new Error("No conf found");
// //         console.log(conff);
// //         res.send(conff);
// //     } catch (e) {
// //         res.send("Error");
// //     }
// // };

// // const updateConf = async (req, res) => {
// //     const { id } = req.params;
// //     try {
// //         if (!id) throw new Error("Id is required");
// //         const conff = await conf.findByIdAndUpdate(
// //             id,
// //             { accepted: true },
// //             { new: true }
// //         );
// //         if (!conff) throw new Error("An error occured");
// //         // console.log(conff);
// //         res.send(conff);
// //     } catch (e) {
// //         res.send("Error");
// //     }
// // };

// // const deleteConf = async (req, res) => {
// //     const { id } = req.params;
// //     try {
// //         if (!id) throw new Error("Id is required");
// //         const conff = await conf.findByIdAndDelete(id);
// //         if (!conff) throw new Error("An error occured");
// //         res.send(conff);
// //     } catch (e) {
// //         res.send("Error");
// //     }
// // };

// // module.exports = {
// //     newConf,
// //     getConf,
// //     getid,
// //     updateConf,
// //     deleteConf,
// // };











// const conf = require("../models/conf");
// const user = require("../models/user");

// const newConf = async (req, res) => {
//     const { name, email, campus, phoneNo, image } = req.body;
//     console.log(req.body);
//     try {
//         const findUser = await user.findOne({ email: email });
//         console.log(findUser);
//         if (!findUser) throw new Error("User not found");

//         const newConf = new conf({
//             name,
//             email,
//             campus,
//             phoneNo,
//             image,
//             accepted: findUser.role === "teacher" ? true : false,
//         });
//         await newConf.save();
//         if (!newConf) throw new Error("An error occured");
//         res.json(newConf);
//     } catch (e) {
//         res.send("Error");
//     }
// };

// const getConf = async (req, res) => {
//     try {
//         const conff = await conf.find();
//         if (!conff) throw new Error("No conf found");
//         res.json(conff);
//     } catch (e) {
//         console.log(e);
//         res.send("Error");
//     }
// };

// const getid = async (req, res) => {
//     const { id } = req.params;
//     try {
//         if (!id) throw new Error("Id is required");
//         const conff = await conf.find({ email: id });
//         if (!conff) throw new Error("No conf found");
//         console.log(conff);
//         res.send(conff);
//     } catch (e) {
//         res.send("Error");
//     }
// };

// const updateConf = async (req, res) => {
//     const { id } = req.params;
//     try {
//         if (!id) throw new Error("Id is required");
//         const conff = await conf.findByIdAndUpdate(
//             id,
//             { accepted: true },
//             { new: true }
//         );
//         if (!conff) throw new Error("An error occured");
//         // console.log(conff);
//         res.send(conff);
//     } catch (e) {
//         res.send("Error");
//     }
// };

// const deleteConf = async (req, res) => {
//     const { id } = req.params;
//     try {
//         if (!id) throw new Error("Id is required");
//         const conff = await conf.findByIdAndDelete(id);
//         if (!conff) throw new Error("An error occured");
//         res.send(conff);
//     } catch (e) {
//         res.send("Error");
//     }
// };

// module.exports = {
//     newConf,
//     getConf,
//     getid,
//     updateConf,
//     deleteConf,
// };








const conf = require("../models/conf");
const user = require("../models/user");

const newConf = async (req, res) => {
    const { name, email, campus, phoneNo, image } = req.body;
    console.log(req.body);
    try {
        const findUser = await user.findOne({ email: email });
        console.log(findUser);
        if (!findUser) throw new Error("User not found");

        const newConf = new conf({
            name,
            email,
            campus,
            phoneNo,
            image,
            accepted: findUser.role === "teacher" ? true : false,
        });
        await newConf.save();
        if (!newConf) throw new Error("An error occured");
        res.json(newConf);
    } catch (e) {
        res.send("Error");
    }
};

const getConf = async (req, res) => {
    try {
        const conff = await conf.find();
        if (!conff) throw new Error("No conf found");
        res.json(conff);
    } catch (e) {
        console.log(e);
        res.send("Error");
    }
};

const getid = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) throw new Error("Id is required");
        const conff = await conf.find({ email: id });
        if (!conff) throw new Error("No conf found");
        console.log(conff);
        res.send(conff);
    } catch (e) {
        res.send("Error");
    }
};

const updateConf = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) throw new Error("Id is required");
        const conff = await conf.findByIdAndUpdate(
            id,
            { accepted: true },
            { new: true }
        );
        if (!conff) throw new Error("An error occured");
        // console.log(conff);
        res.send(conff);
    } catch (e) {
        res.send("Error");
    }
};

const deleteConf = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) throw new Error("Id is required");
        const conff = await conf.findByIdAndDelete(id);
        if (!conff) throw new Error("An error occured");
        res.send(conff);
    } catch (e) {
        res.send("Error");
    }
};

module.exports = {
    newConf,
    getConf,
    getid,
    updateConf,
    deleteConf,
};
