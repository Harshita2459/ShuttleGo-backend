// // const express = require("express");
// // const userController = require("../controller/user");
// // const router = express.Router();


// // router.get("/getAllUsers", userController.getAllUsers);


// // router.post("/login", userController.login);

// // router.post("/register", userController.register);

// // module.exports = router;









// const express = require("express");
// const userController = require("../controller/user");
// const router = express.Router();


// router.get("/getAllUsers", userController.getAllUsers);


// router.post("/login", userController.login);

// router.post("/register", userController.register);

// module.exports = router;









const express = require("express");
const userController = require("../controller/user");
const router = express.Router();


router.get("/getAllUsers", userController.getAllUsers);


router.post("/login", userController.login);

router.post("/register", userController.register);

module.exports = router;