const requestRouter = require("express").Router();
const PaymentController = require("../controllers/paymentController");
const RequestController = require("../controllers/requestController");

requestRouter.get("/", RequestController.fetchAllRequest);
requestRouter.post("/product/:ProductId", RequestController.addProduct);
requestRouter.post("/service/:ServiceId", RequestController.addService);
requestRouter.delete("/product/:ProductId", RequestController.cancelProduct);
requestRouter.delete("/service/:ServiceId", RequestController.cancelService);
requestRouter.get("/payment", PaymentController.getBill);


module.exports = requestRouter;
