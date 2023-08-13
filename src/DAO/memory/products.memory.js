export default class Products {
  constructor() {
    this.products = [];
  }

  getAllProducts = () => {
    const products = ProductModel.find();

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
    const productCreated = ProductModel.create({
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
    const productUpdated = ProductModel.updateOne(
      { _id: id },
      { title, description, code, price, status, stock, category, thumbnail }
    );
    return productUpdated;
  };

  deleteProduct = (id) => {
    const deleted = ProductModel.deleteOne({ _id: id });
    return deleted;
  };
}
