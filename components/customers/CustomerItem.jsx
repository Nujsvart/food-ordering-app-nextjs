import Image from "next/image";

const CustomerItem = ({ image }) => {
  return (
    <div className="flex flex-col gap-y-2 mr-3 text-white">
      <div className="p-6 bg-secondary rounded-md flex-1  gap-y-2 text-sm flex flex-col">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          quaerat similique ratione eos provident quis in eligendi? Vero
          praesentium esse incidunt. Earum, soluta nihil ipsum reiciendis nam
          delectus aspernatur voluptatem.
        </p>
        <h4 className="font-semibold text-lg">Moana Mitchell</h4>
        <span>Lorem, ipsum.</span>
      </div>
      <div className="img-box relative  border-primary border-4 w-28 h-28 rounded-full  mt-8 before:content-[''] before:absolute  before:w-6 before:h-6 before:bg-primary before:rotate-45 before:-top-3 before:left-10 before:origin-center ">
        <Image
          src={image}
          layout="fill"
          objectFit="contain"
          alt="client"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default CustomerItem;
