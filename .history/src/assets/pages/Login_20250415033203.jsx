import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    try {
      const res = await axios.get(`http://localhost:3000/users?email=${values.email}`);
      const user = res.data[0];
      if (user && user.password === values.password) {
        alert("Login successful!");
        navigate("/"); // redirect on success
      } else {
        setErrors({ password: "Invalid email or password" });
      }
    } catch (error) {
      alert("Login failed!");
    }
    setSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={handleLogin}
      >
        <Form className="flex flex-col gap-4">
          <label>Email</label>
          <Field name="email" type="email" className="border p-2 rounded" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

          <label>Password</label>
          <Field name="password" type="password" className="border p-2 rounded" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

          <button type="submit" className="bg-black text-white py-2 rounded hover:bg-gray-800">
            Login
          </button>
        </Form>
      </Formik>
      <p className="mt-4 text-sm">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
