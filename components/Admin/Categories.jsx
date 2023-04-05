import { useState } from "react";
import Title from "@/components/ui/Title";
import Input from "../Form/Input";

const Categories = () => {
  const [category, setCategory] = useState(["pizza", "burger", "pasta"]);
  const [input, setInput] = useState("");

  console.log(category);
  return (
    <div className="w-full">
      <Title className="text-4xl">Categories</Title>
      <div className="flex flex-col mt-8">
        <form
          className="flex space-x-5 items-start"
          onSubmit={e => {
            e.preventDefault();
            setCategory([...category, input]);
            setInput("");
          }}
        >
          <div className="w-2/3">
            <Input
              type="text"
              text="Add a category..."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          </div>
          <button className="btn-primary whitespace-nowrap" type="submit">
            Add
          </button>
        </form>

        <div className="flex flex-col ">
          <ul className="space-y-5">
            {category.map(catItem => (
              <li
                key={catItem}
                className="flex justify-between w-full items-center"
              >
                <div className="uppercase font-semibold">{catItem}</div>
                <button
                  className="btn btn-error text-white whitespace-nowrap"
                  onClick={() =>
                    setCategory(category.filter(cat => cat !== catItem))
                  }
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
