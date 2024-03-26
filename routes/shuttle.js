// // const express = require("express");
// // const shuttleController = require("../controller/shuttle");
// // const createShuttle = require("../controller/create");
// // const bookingController = require('../controller/booking');
// // const router = express.Router();



// // router.post("/getAllShuttles", shuttleController.getAllShuttles);

// // router.post("/bookShuttle", bookingController.bookShuttle);

// // module.exports = router;






// const express = require("express");
// const shuttleController = require("../controller/shuttle");
// const createShuttle = require("../controller/create");
// const bookingController = require('../controller/booking');
// const router = express.Router();



// router.post("/getAllShuttles", shuttleController.getAllShuttles);

// router.post("/bookShuttle", bookingController.bookShuttle);

// module.exports = router;











const express = require("express");
const shuttleController = require("../controller/shuttle");
const createShuttle = require("../controller/create");
const bookingController = require('../controller/booking');
const router = express.Router();



router.post("/getAllShuttles", shuttleController.getAllShuttles);

router.post("/bookShuttle", bookingController.bookShuttle);

module.exports = router;