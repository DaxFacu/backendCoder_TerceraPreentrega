import ProductsMongo from "../DAO/mongo/products.mongo.js";

class ProductsService {
  getAllProducts = () => {
    const products = ProductsMongo.getAllProducts;

    return products;
  };

  createProduct = (
    title,
    description,
    code,
    price,
    status,
    stock,
    category,
    thumbnail,
    id
  ) => {
    console.log(title);
    const productCreated = ProductsMongo.createProduct({
      title,
      description,
      code,
      price,
      status,
      stock,
      category,
      thumbnail,
      id,
    });
    return productCreated;
  };

  updateProduct = (
    id,
    title,
    description,
    code,
    price,
    status,
    stock,
    category,
    thumbnail
  ) => {
    const productUpdated = ProductsMongo.updateProduct(
      { _id: id },
      { title, description, code, price, status, stock, category, thumbnail }
    );
    return productUpdated;
  };

  deleteProduct = (id) => {
    const deleted = ProductsMongo.deleteProduct({ _id: id });
    return deleted;
  };
}

export const productsService = new ProductsService();
