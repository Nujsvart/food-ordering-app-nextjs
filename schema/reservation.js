import * as Yup from "yup";

export const reservationSchema = () => Yup.object({
    fullName: Yup.string().required("Full Name is required").min(3, "Full Name must be at least 3 characters"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    numberOfPersons: Yup.number().required("Number of Persons is required"),
})