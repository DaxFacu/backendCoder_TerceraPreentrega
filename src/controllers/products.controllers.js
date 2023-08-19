import { productsService } from "../services/products.service.js";

class ProductsController {
  Create = async (req, res) => {
    try {
      const {
        title,
        description,
        code,
        price,
        status,
        stock,
        category,
        thumbnail,
      } = req.body;
      const productCreated = await productsService.createProduct(
        title,
        description,
        code,
        price,
        status,
        stock,
        category,
        thumbnail
      );
      console.log(title + " 01");
      return res.status(201).json({
        status: "success",
        msg: "user created",
        data: productCreated,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        status: "error",
        msg: "something went wrong :(",
        data: {},
      });
    }
  };

  Update = async (req, res) => {
    try {
      const { id } = req.params;
      const {
        title,
        description,
        code,
        price,
        status,
        stock,
        category,
        thumbnail,
      } = req.body;

      const productUptaded = await productsService.updateProduct(
        id,
        title,
        description,
        code,
        price,
        status,
        stock,
        category,
        thumbnail
      );
      return res.status(201).json({
        status: "success",
        msg: "product uptaded",
        data: productUptaded,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        status: "error",
        msg: "something went wrong :(",
        data: {},
      });
    }
  };

  Delete = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await productsService.deleteProduct(id);
      return res.status(200).json({
        status: "success",
        msg: "product deleted",
        data: {},
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        status: "error",
        msg: "something went wrong :(",
        data: {},
      });
    }
  };
}

export const productsController = new ProductsController();
