const Measurement = require("../modules/measurement");
const MobileFrontendController = {
  measurement: false,
  start: (req, res) => {
    MobileFrontendController["measurement"] = true;
    res.send("Measurment started");
  },
  stop: (req, res) => {
    MobileFrontendController["measurement"] = false;
    res.send("Measurment stopped");
  },
  isActive: (req, res) => {
    return res.send(MobileFrontendController["measurement"]);
  },
  getAll: async (req, res) => {
    const meas = await Measurement.find();
    res.json(meas);
  },
  load: async (req, res) => {
    const meas = await Measurement.findOne({ _id: req.query.measurementId });
    console.log(meas);
    res.json(meas);
  },
  save: async (req, res) => {
    MobileFrontendController["measurement"] =  false;
    const newMs = new Measurement(req.body.measurement);
    await newMs.save();
    res.json("Measurement saved");
  },
};
module.exports = MobileFrontendController;
