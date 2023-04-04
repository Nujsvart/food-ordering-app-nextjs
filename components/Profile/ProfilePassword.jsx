import Title from "../ui/Title";
import Input from "../Form/Input";
import { useFormik } from "formik";
import { passwordSchema } from "@/schema/account";

const ProfilePassword = () => {
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: passwordSchema,
    onSubmit: values => {
      console.log(values);
      formik.handleReset();
    },
  });

  const passwordInputs = [
    {
      id: 1,
      name: "oldPassword",
      type: "password",
      text: "Old Password",
      value: formik.values.oldPassword,
      errorMessage: formik.errors.oldPassword,
      touched: formik.touched.oldPassword,
    },
    {
      id: 2,
      name: "newPassword",
      type: "password",
      text: "New Password",
      value: formik.values.newPassword,
      errorMessage: formik.errors.newPassword,
      touched: formik.touched.newPassword,
    },
  ];

  return (
    <div className="w-full">
      <Title className="text-4xl">Password</Title>
      <form
        className="grid grid-cols-2 grid-rows-4 mt-8 gap-x-4 "
        onSubmit={formik.handleSubmit}
      >
        {passwordInputs.map(input => (
          <Input
            {...input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        ))}
        <button className="btn-primary self-center" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfilePassword;
