import Image from "next/image";

const CustomerItem = ({ customer }) => {
  const { comment, name, signature, image } = customer;
  return (
    <div className="flex flex-col gap-y-2">
      <div className="p-6 bg-secondary rounded-md flex-1  gap-y-2 text-sm flex flex-col">
        <p>{comment}</p>
        <h4 className="font-semibold text-lg">{name}</h4>
        <span>{signature}</span>
      </div>
      <div className="img-box relative  border-primary border-4 w-28 h-28 rounded-full  mt-8 before:content-[''] before:absolute  before:w-6 before:h-6 before:bg-primary before:rotate-45 before:-top-3 before:left-10 before:origin-center ">
        <Image
          src={image}
          layout="fill"
          objectFit="contain"
          alt={name}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default CustomerItem;
