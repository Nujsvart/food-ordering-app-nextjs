import Input from "../Form/Input";
import Title from "../ui/Title";
import { useFormik } from "formik";

const Reservation = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);
    // 1 saniye bekle
    await new Promise(resolve => setTimeout(resolve, 1000));
    // formu resetle
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      numberOfPersons: "",
      date: "",
    },
    onSubmit,
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      text: "Your Full Name",
      value: formik.values.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "tel",
      text: "Your Phone Number",
      value: formik.values.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      text: "Your Email",
      value: formik.values.email,
    },
    {
      id: 4,
      name: "numberOfPersons",
      type: "number",
      text: "How Many Persons?",
      value: formik.values.numberOfPersons,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      text: "",
      value: formik.values.date,
    },
  ];

  return (
    <div className="container mx-auto py-10 flex flex-col">
      <Title className="text-3xl">Book A Table</Title>
      <div className="flex gap-8 w-full flex-col sm:flex-row my-6 justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col flex-1 items-start"
        >
          {inputs.map(input => (
            <Input key={input.id} {...input} onChange={formik.handleChange} />
          ))}
          <button type="submit" className="btn-primary uppercase text-sm ">
            Book Now
          </button>
        </form>
        <div className="flex flex-1  ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20338.576658856484!2d-74.00781705529299!3d40.73237830075093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Binas%C4%B1!5e0!3m2!1str!2str!4v1680211699424!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
