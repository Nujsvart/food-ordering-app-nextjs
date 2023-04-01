import Image from "next/image";
import Title from "../ui/Title";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  return (
    <div
      className={`${
        router.asPath !== "/"
          ? "bg-white text-black"
          : "bg-secondary text-white"
      } my-10`}
    >
      <div className="flex py-20 px-10 justify-center items-center gap-16 md:flex-row flex-col-reverse">
        <div className="relative ">
          <Image
            src="/images/about-img.png"
            width={400}
            height={400}
            alt="about"
          />
        </div>

        <div className=" flex flex-col gap-y-5 basis-1/3 items-start">
          <Title className="text-4xl">We are Feane</Title>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </p>
          <button className="btn-primary ">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
