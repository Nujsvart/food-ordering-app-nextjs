import * as Yup from "yup";

export const footerSchema = Yup.object({
  iconName: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .required("Required")
    .min(10, "Invalid phone number"),
  description: Yup.string().required("Required"),
  day: Yup.string().required("Required"),
  time: Yup.string().required("Required"),
  link: Yup.string().required("Required"),
});
