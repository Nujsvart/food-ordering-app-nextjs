import Title from "../ui/Title";
import Input from "../Form/Input";
import { useFormik } from "formik";
import { footerSchema } from "@/schema/footer";
import { useState } from "react";
import Link from "next/link";

import {
  SiFacebook,
  SiTwitter,
  SiLinkedin,
  SiInstagram,
  SiPinterest,
} from "react-icons/si";
import { AiFillDelete } from "react-icons/ai";

const Footer = () => {
  const [icons, setIcons] = useState([
    {
      id: 1,
      name: "facebook",
      icon: <SiFacebook />,
      link: "https://google.com",
    },
    {
      id: 2,
      name: "twitter",
      icon: <SiTwitter />,
      link: "https://google.com",
    },
    {
      id: 3,
      name: "linkedin",
      icon: <SiLinkedin />,
      link: "https://google.com",
    },
    {
      id: 4,
      name: "instagram",
      icon: <SiInstagram />,
      link: "https://google.com",
    },
    {
      id: 5,
      name: "pinterest",
      icon: <SiPinterest />,
      link: "https://google.com",
    },
  ]);

  const formik = useFormik({
    initialValues: {
      location: "https://google.com",
      email: "dumandelibas@gmail.com",
      phoneNumber: "454746446",
      description:
        "Necessary, making this the first true generator on the internet",
      day: "Everyday",
      time: "14.00 Am - 12.00 Pm",
      link: "https://google.com",
      iconName: "fab fa-facebook-f",
    },
    validationSchema: footerSchema,
    onSubmit: values => {
      console.log(values);
      formik.handleReset();
    },
  });

  const footerInputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      text: "Your Location",
      value: formik.values.location,
      errorMessage: formik.errors.location,
      touched: formik.touched.location,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      text: "Your Email",
      value: formik.values.email,
      errorMessage: formik.errors.email,
      touched: formik.touched.email,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      text: "Your Phone Number",
      value: formik.values.phoneNumber,
      errorMessage: formik.errors.phoneNumber,
      touched: formik.touched.phoneNumber,
    },
    {
      id: 4,
      name: "description",
      type: "text",
      text: "Your Description",
      value: formik.values.description,
      errorMessage: formik.errors.description,
      touched: formik.touched.description,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      text: "Your Day",
      value: formik.values.day,
      errorMessage: formik.errors.day,
      touched: formik.touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "text",
      text: "Your Time",
      value: formik.values.time,
      errorMessage: formik.errors.time,
      touched: formik.touched.time,
    },
  ];

  const linkInputs = [
    {
      id: 1,
      name: "link",
      type: "text",
      text: "Your Link",
      value: formik.values.link,
      errorMessage: formik.errors.link,
      touched: formik.touched.link,
    },
    {
      id: 2,
      name: "iconName",
      type: "text",
      text: "Your Icon Name",
      value: formik.values.iconName,
      errorMessage: formik.errors.iconName,
      touched: formik.touched.iconName,
    },
  ];

  return (
    <div className="w-full">
      <Title className="text-4xl">Footer</Title>
      <form className="my-8" onSubmit={formik.handleSubmit}>
        <div className="sm:grid-rows-3 sm:grid-cols-2 grid sm:gap-x-4">
          {footerInputs.map(input => (
            <Input
              {...input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          ))}
        </div>
        <div className="flex flex-col ">
          <div className="flex space-x-4 items-start">
            {linkInputs.map(input => (
              <Input
                {...input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={input.value}
              />
            ))}
            <button
              className="btn-primary"
              onClick={() =>
                setIcons([
                  ...icons,
                  {
                    id: 6,
                    link: formik.values.link,
                    icon: formik.values.iconName,
                  },
                ])
              }
            >
              Add
            </button>
          </div>

          <div className="flex space-x-4 text-2xl items-start flex-wrap">
            {icons.map(icon => (
              <div key={icon.id} className="flex space-x-2 ">
                <Link href={icon.link}>{icon.icon}</Link>

                <button
                  type="button"
                  className="text-red-700"
                  onClick={() =>
                    setIcons(icons.filter(item => item.id !== icon.id))
                  }
                >
                  <AiFillDelete />
                </button>
              </div>
            ))}
          </div>
        </div>
      </form>
      <button className="btn-primary mb-4" type="submit">
        Update
      </button>
    </div>
  );
};

export default Footer;
