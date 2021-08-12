const MobileFrontendController = {
  measurement: false,
  startMeasurment: (req, res) => {
    MobileFrontendController["measurement"] = true;
    res.send("Measurment started");
  },
  stopMeasurment: (req, res) => {
    MobileFrontendController["measurement"] = false;
    MobileFrontendController["arrayForChart"] = []; 
    res.send("Measurment stopped");
  },
  isMeasurment: (req, res) => {
    return res.send(MobileFrontendController["measurement"]);
  },
};
module.exports = MobileFrontendController;
