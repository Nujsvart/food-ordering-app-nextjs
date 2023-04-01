import Title from "@/components/ui/Title";
import { useFormik } from "formik";
import Input from "@/components/Form/Input";
import Link from "next/link";
import { registerShema } from "@/schema/register";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerShema,
    onSubmit: values => {
      console.log(values);
    },
  });

  const registerInputs = [
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
      name: "password",
      type: "password",
      text: "Your Password",
      value: formik.values.password,
      errorMessage: formik.errors.password,
      touched: formik.touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      text: "Confirm Password",
      value: formik.values.confirmPassword,
      errorMessage: formik.errors.confirmPassword,
      touched: formik.touched.confirmPassword,
    },
  ];
  return (
    <div className="container mx-auto pt-14">
      <Title className="text-3xl text-center">Register</Title>
      <form
        className="w-full md:w-2/3 lg:w-1/2 mx-auto mt-10"
        onSubmit={formik.handleSubmit}
      >
        {registerInputs.map(input => (
          <Input
            key={input.id}
            {...input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        ))}
        <div className="flex flex-col space-y-3 mt-6">
          <button className="btn-primary uppercase" type="submit">
            Register
          </button>
          <Link href="auth/login">
            <span className="underline hover:text-primary hover:no-underline transition-all text-sm text-secondary">
              Don you have an account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
