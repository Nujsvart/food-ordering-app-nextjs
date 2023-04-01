import Title from "@/components/ui/Title";
import Input from "@/components/Form/Input";
import { useFormik } from "formik";
import { adminSchema } from "@/schema/admin";

const Admin = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: adminSchema,
    onSubmit: values => {
      console.log(values);
      formik.handleReset();
    },
  });

  const adminInputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      text: "Your Username",
      value: formik.values.userName,
      errorMessage: formik.errors.userName,
      touched: formik.touched.userName,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      text: "Your Password",
      value: formik.values.password,
      errorMessage: formik.errors.password,
      touched: formik.touched.password,
    },
  ];

  return (
    <div className="container mx-auto pt-14 h-[45.6vh] lg:h-[48.8vh]">
      <Title className="text-3xl text-center">Admin Login</Title>
      <form
        className="w-full md:w-2/3 lg:w-1/2 mx-auto mt-10"
        onSubmit={formik.handleSubmit}
      >
        {adminInputs.map(input => (
          <Input
            key={input.id}
            {...input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        ))}
        <div className="flex flex-col space-y-3 mt-6">
          <button className="btn-primary uppercase" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
