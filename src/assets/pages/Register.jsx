import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';


const Register = () => {
    const navigate = useNavigate();
  
    const handleRegister = async (values, { setSubmitting }) => {
      try {
        await axios.post("http://localhost:3000/users", values);
  
        // Success toast
        toast.success("Registration successful!");
  
        // Navigate to login page
        navigate("/login");
      } catch (error) {
        // Error toast
        toast.error("Registration failed! Please try again.");
      }
  
      setSubmitting(false); // Stop submitting
    };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string().min(6, "Min 6 characters").required("Required"),
        })}
        onSubmit={handleRegister}
      >
        <Form className="flex flex-col gap-4">
          <label>Name</label>
          <Field name="name" className="border p-2 rounded" />
          <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

          <label>Email</label>
          <Field name="email" type="email" className="border p-2 rounded" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

          <label>Password</label>
          <Field name="password" type="password" className="border p-2 rounded" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

          <button type="submit" className="bg-black text-white py-2 rounded hover:bg-gray-800">
            Register
          </button>
        </Form>
      </Formik>
      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
