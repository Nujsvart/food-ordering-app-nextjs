import Title from "../ui/Title";
import Image from "next/image";

const Products = () => {
  const items = [
    {
      id: 1,
      title: "Good Pizza",
      price: "$20",
      image: "/images/food.png",
      action: "delete",
    },
    {
      id: 2,
      title: "Good Pizza",
      price: "$20",
      image: "/images/food.png",
      action: "delete",
    },
    {
      id: 3,
      title: "Good Pizza",
      price: "$20",
      image: "/images/food.png",
      action: "delete",
    },
    {
      id: 4,
      title: "Good Pizza",
      price: "$20",
      image: "/images/food.png",
      action: "delete",
    },
  ];

  return (
    <div className="w-full">
      <Title className="text-4xl">Products</Title>
      <table className="table w-full mt-5">
        {/* head */}
        <thead>
          <tr className="text-white">
            <th className="text-center bg-secondary/90">Product</th>
            <th className="text-center bg-secondary/90">Id</th>
            <th className="text-center bg-secondary/90">Title</th>
            <th className="text-center bg-secondary/90">Price</th>
            <th className="text-center bg-secondary/90">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          {items.map(item => (
            <tr key={item.id}>
              <td className="text-center">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <Image src={item.image} alt="pizza food" layout="fill" />
                  </div>
                </div>
              </td>
              <td className="text-center ">{item.id}</td>
              <td className="text-center">{item.title}</td>
              <td className="text-center">{item.price}</td>
              <td className="text-center">
                <button className="btn btn-sm btn-error">{item.action}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
