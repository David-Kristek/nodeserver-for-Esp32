let io;
const MobileFrontendController = require("../controller/MobileFrontendController");
var lastMeasurementData; 
exports.socketConnection = (ioP) => {
  io = ioP;
  io.on("connection", (socket) => {
    console.log("New client connected");
    if (MobileFrontendController["measurement"]) this.sendMeasurementToMobile(lastMeasurementData);
    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};

exports.sendDataToMobile = (data) => {
  io.emit("senzor_data", data);
};
exports.sendMeasurementToMobile = (data) => {
  lastMeasurementData = data; 
  // console.log(data);
  io.emit("measurement_data", data);
};
