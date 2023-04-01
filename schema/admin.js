import * as Yup from "yup";

export const adminSchema = Yup.object({
  userName: Yup.string()
    .required("Your User Name is required")
    .min(3, "User Name is too short"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must contain at least one letter and one number"
    ),
});
