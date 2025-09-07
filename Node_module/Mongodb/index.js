const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

// create product schema

const productSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: Number,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// create product model

const Product = mongoose.model("Product", productSchema);

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Product");
    console.log("db is connected");
  } catch (error) {
    console.error("DB connection failed");
    console.log(error.message);
    process.exit(1);
  }
};

app.get("/product", async (req, res) => {
  try {
    const products = await Product.find();
    if (products) {
      res.status(200).send(products);
    } else {
      res.status(404).send({
        message: "Product not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});
app.get("/product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const products = await Product.find({ _id: id });
    if (products) {
      res.status(200).send({
        success: true,
        message: "return single product",
        data: products,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.post("/product", async (req, res) => {
  try {
    // new object fot store
    const newProduct = new Product({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    });
    const storeProductDB = await newProduct.save();
    res.status(200).send(storeProductDB);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.delete("/product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const products = await Product.deleteOne({ _id: id });
    if (products) {
      res.status(200).send({
        success: true,
        message: "deleted single product",
        data: products,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.put("/product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const UpdateProducts = await Product.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title: "apple",
        },
      }
    );

    if (UpdateProducts) {
      res.status(200).send({
        success: true,
        message: "deleted single product",
        data: UpdateProducts,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.listen(PORT, async () => {
  console.log(`server is running at http://localhost:${PORT}`);
  await dbConnect();
});
