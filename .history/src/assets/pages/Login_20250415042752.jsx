// src/components/Login.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      console.log("success");
  
      const user = res.data.find(
        (u) => u.email === values.email && u.password === values.password
      );
  
      if (user) {
        // Success toast
        toast.success("Login successful!");
  
        // Redirect to home page
        navigate("/"); 
      } else {
        // Error toast for invalid credentials
        setErrors({ email: "Invalid credentials" });
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      // Error handling toast
      toast.error("An error occurred. Please try again later.");
      console.error("Error during login:", error);
    } finally {
      setSubmitting(false); // Make sure to stop submitting
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg border rounded">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4">
          <label>Email</label>
          <Field name="email" type="email" className="border p-2 rounded" />
          <ErrorMessage name="email" component="div" className="text-red-500" />

          <label>Password</label>
          <Field name="password" type="password" className="border p-2 rounded" />
          <ErrorMessage name="password" component="div" className="text-red-500" />

          <button
            type="submit"
            className="bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Login
          </button>

          <p className="text-center text-sm">
            Not registered?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
