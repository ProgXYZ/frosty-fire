import React from "react";
import { Formik } from "formik";
import { Form, Field } from "formik";

function ContactUsFormik() {
  const formValidatation = (values) => {
    const errors = {};

    if (!values.firstname) {
      errors.firstname = "Required";
    } else if (values.firstname.length < 3) {
      errors.firstname = "Must be more than 3 characters";
    } else if (values.firstname.length > 15) {
      errors.firstname = "Must be 15 characters or less";
    }
    console.log(values);
    if (!values.lastname) {
      errors.lastname = "Required";
    } else if (values.lastname.length < 4) {
      errors.lastname = "Must be more than 4 characters";
    } else if (values.lastname.length > 20) {
      errors.lastname = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    //console.log(`Errors: ${JSON.stringify(errors)}`);
    return errors;
  };

  return (
    <div>
      <h1>Contact us</h1>
      <Formik
        initialValues={{ firstname: "", lastname: "", email: "" }}
        validate={formValidatation}
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

export default ContactUsFormik;
