import Title from "../ui/Title";

const ShoppingCart = () => {
  return (
    <div className="text-white lg:w-1/4 bg-secondary/90 px-6 py-4  lg:pt-4 flex rounded-md flex-col space-y-5  ">
      <Title className="text-3xl ">Cart Total </Title>
      <div className="text font-semibold">
        <p>
          Subtotal: <span className="font-light">$20</span>
        </p>
        <p>
          Subtotal: <span className="font-light">$20</span>
        </p>
        <p>
          Subtotal: <span className="font-light">$20</span>
        </p>
      </div>
      <button className="btn-primary whitespace-nowrap">Checkout Now!</button>
    </div>
  );
};

export default ShoppingCart;
