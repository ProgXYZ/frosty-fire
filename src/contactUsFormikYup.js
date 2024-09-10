import React from "react";
import { Formik } from "formik";
import { Form, Field } from "formik";
import * as Yup from "yup";

function ContactUsFormikYup() {
  const contactUsFormSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Min size is 2 characters")
      .max(10, "Max size is 10 characters")
      .required("Required"),
    lastname: Yup.string()
      .min(3, "Min size is 3 characters")
      .max(15, "Max size is 15 characters")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <div>
      <h1>Contact us</h1>
      <Formik
        initialValues={{ firstname: "", lastname: "", email: "" }}
        validationSchema={contactUsFormSchema}
        onSubmit={(values) => {
          // same shape as initial values
          alert(JSON.stringify(values, null, 2));
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="firstname">Firstname:</label>
              <Field name="firstname" type="text" />
              {errors.firstname && touched.firstname ? (
                <span className="error-message">{errors.firstname}</span>
              ) : null}
            </div>
            <div>
              <label>Lastname: </label>
              <Field name="lastname" />
              {errors.lastname && touched.lastname ? (
                <span>{errors.lastname}</span>
              ) : null}
            </div>
            <div>
              <label htmlFor="email ">Email:</label>
              <Field name="email" type="email" />
              {errors.email && touched.email ? (
                <span>{errors.email}</span>
              ) : null}
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactUsFormikYup;
