const Order = require("../models/Orders");
//const Product = require("../models/Products");

const { requireAuth, requireAdmin, isAdmin } = require("../middleware/auth");

module.exports = (app, next) => {
  //  app.get("/orders", (req, res) => {
  //      res.status(200).json({
  //   status: 'API',
  //          message: 'Orders',
  // data: orders
  //     });
  //    });

  //  app.get("/orders", (req, res) => {
  //   Order.find({}, (err, orders) => {
  //        if(err) return res.status(400).send(err)
  //        res.status(200).send(orders)
  //       //  .res.json({
  //       //     status: 'API',
  //       //     message: 'orders',
  //       //    });
  //    })
  //  });

  app.get("/orders", (req, res) => {
    Order.find({}, (err, orders) => {
      if (err) {
        res.json({
          status: "error",
          message: err
        });
      }
      res.json({
        status: "pending",
        message: "Orders",
        _id: req.params.orders_id,
        items: orders,
        createdAt:"date",
        createdBy:"id493847"
      });
    });
  });

  /*
app.get("/orders", (req, res) => {
    let type = req.query.type;
    let items = req.query.id;
    p
    if (type === "array") {
      let ids = req.query.id.split(",");
      items = [];
      items = ids.map(item => {
        return mongoose.Types.ObjectId(item);
      });
    }
    Order.find({ _id: { $in: items } })
      
      .exec((err, docs) => {
        return res.status(200).send(docs);
      });
  
  });
  */

  return next();
};
