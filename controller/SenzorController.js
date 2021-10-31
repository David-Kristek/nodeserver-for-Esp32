const MobileFrontendController = require("./MobileFrontendController");
const { sendDataToMobile, sendMeasurementToMobile } = require("../Sockets");
const SenzorController = {
  temperature: 0,
  humidity: 0,
  brightness: 0,
  arrayForChart: [],
  getSenzorValues: (req, res) => {
    const { temperature, humidity, brightness } = req.body;
    console.log(req.body)
    if (!temperature || !humidity || !brightness) {
      console.log("reading from senzors failed");
      return res.send("Failed to read from senzors");
    }
    this.humidity = humidity;
    this.temperature = temperature;
    this.brightness = brightness;
    var data = {
      temperature: this.temperature,
      humidity: this.humidity,
      brightness: this.brightness,
      date: new Date(),
    };
    if (MobileFrontendController["measurement"]) {
      console.log("measurement");
      SenzorController["arrayForChart"].push(data);
      console.log(SenzorController["arrayForChart"]);
      sendMeasurementToMobile(SenzorController["arrayForChart"]);
      return res.send("Measurment on");
    }
    SenzorController["arrayForChart"] = [];
    sendDataToMobile(data);
    return res.send("Success");
  },
  // getValuesToMobile: (req, res) => {
  //   return res.json({
  //     temperature: this.temperature,
  //     humidity: this.humidity,
  //     brightness: 0,
  //   });
  // },
  // getMeasurement: (req, res) => {

  //   return res.json(SenzorController["arrayForChart"]);
  // },
};

module.exports = SenzorController;
