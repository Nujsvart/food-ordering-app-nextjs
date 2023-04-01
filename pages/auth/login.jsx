import Title from "@/components/ui/Title";
import Input from "@/components/Form/Input";
import { useFormik } from "formik";
import { loginSchema } from "@/schema/login";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      console.log(values);
      formik.handleReset();
    },
  });

  const loginInputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      text: "Your Email",
      value: formik.values.email,
      errorMessage: formik.errors.email,
      touched: formik.touched.email,
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
    <div className="container mx-auto pt-14">
      <Title className="text-3xl text-center">Login</Title>
      <form
        className="w-full md:w-2/3 lg:w-1/2 mx-auto mt-10"
        onSubmit={formik.handleSubmit}
      >
        {loginInputs.map(input => (
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
          <button className="btn-primary !bg-black uppercase flex items-center justify-center gap-x-3">
            <FaGithub size="1.4rem" /> Github
          </button>
          <Link href="/auth/register">
            <span className="underline hover:text-primary hover:no-underline transition-all text-sm text-secondary">
              Don't you have an account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
