import Title from "../ui/Title";
import Input from "../Form/Input";
import { useFormik } from "formik";
import { accountSchema } from "@/schema/account";

const ProfileSettings = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "Duman Delibas",
      email: "dumandelibas@gmail.com",
      phoneNumber: "",
      address: "",
      jobTitle: "",
      about: "",
    },
    validationSchema: accountSchema,
    onSubmit: values => {
      console.log(values);
      formik.handleReset();
    },
  });

  const accountInputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      text: "Your Full Name",
      value: formik.values.fullName,
      errorMessage: formik.errors.fullName,
      touched: formik.touched.fullName,
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
      name: "address",
      type: "text",
      text: "Your Address",
      value: formik.values.address,
      errorMessage: formik.errors.address,
      touched: formik.touched.address,
    },
    {
      id: 5,
      name: "jobTitle",
      type: "text",
      text: "Your Job",
      value: formik.values.jobTitle,
      errorMessage: formik.errors.jobTitle,
      touched: formik.touched.jobTitle,
    },
    {
      id: 6,
      name: "about",
      type: "text",
      text: "Your Bio",
      value: formik.values.about,
      errorMessage: formik.errors.about,
      touched: formik.touched.about,
    },
  ];

  return (
    <div className="w-full">
      <Title className="text-4xl">Account Settings</Title>
      <form
        className="grid grid-cols-2 grid-rows-4 mt-8 gap-x-4 "
        onSubmit={formik.handleSubmit}
      >
        {accountInputs.map(input => (
          <Input
            {...input}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        ))}

        <button className="btn-primary self-center" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
