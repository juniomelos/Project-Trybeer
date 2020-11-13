const connection = require('./connection');

const getAllProductMod = async () => {
  try {
    const db = await connection();
    const prodDB = await db
      .getTable('products')
      .select(['id', 'name', 'price', 'url_image'])
      .execute();
    const [id, name, price, url_image] = await prodDB.fetchAll();
    const all = await prodDB.fetchAll();

    console.log('prodDB', await Promise.all(all));
    return {
      id,
      name,
      price,
      url_image,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  getAllProductMod,
};
