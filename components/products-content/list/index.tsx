import { useEffect, useState } from "react";
import ProductItem from "../../product-item";
import { ProductTypeList } from "types";

const ProductsContent = () => {
  const [ products, setProducts ] = useState<ProductTypeList[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("api/product");
        console.log(response);
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, []);

  const productData = {
    id: "3",
    name: "T-Shirt Summer Vibes",
    price: "119.99",
    quantityAvailable: 2,
    category: "T-shirt",
    currentPrice: 89.99,
    sizes: ["xl", "l"],
    colors: "#D4BE8D",
    images: ["/images/products/product-3.jpg"],
    punctuation: {
      countOpinions: 81,
      punctuation: 4.5,
      votes: [
        {
          value: 1,
          count: 1,
        },
        {
          value: 2,
          count: 10,
        },
        {
          value: 3,
          count: 10,
        },
        {
          value: 4,
          count: 20,
        },
        {
          value: 5,
          count: 40,
        },
      ],
    },
    reviews: [
      {
        name: "John Doe",
        avatar: "/images/featured-1.jpg",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>",
        punctuation: 2,
      },
      {
        name: "John Doe",
        avatar: "/images/featured-1.jpg",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>",
        punctuation: 4,
      },
      {
        name: "John Doe",
        avatar: "/images/featured-1.jpg",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>",
        punctuation: 5,
      },
    ],
  };
  return (
    <>
      <section className="products-list">
        {products?.map((items: ProductTypeList) => {
          console.log(items);
          return (
            <ProductItem
              id={items.id}
              name={items.name}
              price={items.price}
              color={items.colors}
              currentPrice={items.currentPrice}
              key={items.id}
              images={items.images}
            />
          );
        })}
      </section>
    </>
  );
};

export default ProductsContent;
