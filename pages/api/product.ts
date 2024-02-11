import { NextApiRequest, NextApiResponse } from "next";
import ProductData from '../../data/products.json';

const ProductAPI = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {

    // implement the retail server API (CSU)

    res.status(200).json(ProductData);
  } else if (req.method === "POST") {

  }
};

export default ProductAPI;
