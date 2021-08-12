const router = require("express").Router();
const SenzorController = require("../controller/SenzorController");
const MobileFrontendController = require("../controller/MobileFrontendController");

// router.get("/", SenzorController.getValuesToMobile);
router.get("/startMeasurment", MobileFrontendController.startMeasurment);
router.get("/stopMeasurment", MobileFrontendController.stopMeasurment);
router.get("/isMeasurment", MobileFrontendController.isMeasurment);
// router.get("/measurment/values", SenzorController.getMeasurement);
// 
module.exports = router;
