import { Formik } from "formik";
import { Form, Field } from "formik";
import * as Yup from "yup";
//import Button from "react-bootstrap/Button";
import { Container, Button, Alert } from "react-bootstrap";

function ContactUsFormikYupBS() {
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
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">Contact Us</h1>
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
              <div className="sm-4">
                <label htmlFor="firstname" className="form-label">
                  Firstname:
                </label>
                <Field name="firstname" type="text" className="form-control" />
                {errors.firstname && touched.firstname ? (
                  <span className="error-message">{errors.firstname}</span>
                ) : null}
              </div>
              <div className="sm-4">
                <label htmlFor="lastname" className="form-label">
                  Lastname:{" "}
                </label>
                <Field name="lastname" className="form-control" />
                {errors.lastname && touched.lastname ? (
                  <span>{errors.lastname}</span>
                ) : null}
              </div>
              <div className="sm-4">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <Field name="email" type="email" className="form-control" />
                {errors.email && touched.email ? (
                  <span>{errors.email}</span>
                ) : null}
              </div>
              <div>
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </Container>
  );
}

export default ContactUsFormikYupBS;
