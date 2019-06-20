const Product = require("../models/Products");
const { requireAuth, requireAdmin, isAdmin } = require("../middleware/auth");

module.exports = (app, next) => {
  app.get("/products", (req, res) => {
    Product.find({}, (err, products) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(products);
    });
  });

  app.get("/products/:id", (req, res) => {
    Product.find({ _id: req.params.id }).then(products => res.json(products));
  });

  app.post("/products", requireAdmin, (req, res) => {
    const product = new Product(req.body);
    //doc back from mongoose, mongo DB. Save return whenever we just enter to the database
    product.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      res.status(200).json({
        success: true,
        product: doc
      });
    });
  });

  app.put("/products/:id", requireAdmin, (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(function() {
      Product.findOne({ _id: req.params.id }).then(function(products) {
        res.send(products);
      });
    });
  });

  app.delete("/products/:id", requireAdmin, (req, res, next) => {
    Product.deleteOne({ _id: req.params.id })
      .then(() => {
        return Product.find();
      })
      .then(doc => res.json(doc))
      .catch(next);
  });

  return next();
};
