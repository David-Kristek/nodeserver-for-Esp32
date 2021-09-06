const router = require("express").Router();
const SenzorController = require("../controller/SenzorController");
const MobileFrontendController = require("../controller/MobileFrontendController");

router.get("/start", MobileFrontendController.start);
router.get("/stop", MobileFrontendController.stop);
router.get("/isActive", MobileFrontendController.isActive);
router.get("/getAll", MobileFrontendController.getAll);
router.get("/load", MobileFrontendController.load);
router.post("/save", MobileFrontendController.save);

module.exports = router;
