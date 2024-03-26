// // // const express = require("express");
// // // const {
// // //     getConf,
// // //     newConf,
// // //     getid,
// // //     updateConf,
// // //     deleteConf,
// // // } = require("../controller/conf");
// // // const router = express.Router();

// // // router.get("/", getConf);
// // // router.get("/:id", getid);
// // // router.post("/", newConf);
// // // router.put("/:id", updateConf);
// // // router.delete("/:id", deleteConf);

// // // module.exports = router;









// // const express = require("express");
// // const {
// //     getConf,
// //     newConf,
// //     getid,
// //     updateConf,
// //     deleteConf,
// // } = require("../controller/conf");
// // const router = express.Router();

// // router.get("/", getConf);
// // router.get("/:id", getid);
// // router.post("/", newConf);
// // router.put("/:id", updateConf);
// // router.delete("/:id", deleteConf);

// // module.exports = router;














// const express = require("express");
// const {
//     getConf,
//     newConf,
//     getid,
//     updateConf,
//     deleteConf,
// } = require("../controller/conf");
// const router = express.Router();

// router.get("/", getConf);
// router.get("/:id", getid);
// router.post("/", newConf);
// router.put("/:id", updateConf);
// router.delete("/:id", deleteConf);

// module.exports = router;












const express = require("express");
const {
    getConf,
    newConf,
    getid,
    updateConf,
    deleteConf,
} = require("../controller/conf");
const router = express.Router();

router.get("/", getConf);
router.get("/:id", getid);
router.post("/", newConf);
router.put("/:id", updateConf);
router.delete("/:id", deleteConf);

module.exports = router;
