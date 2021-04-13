import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm = () => (
  <div id="contactForm">
    <Formik
      initialValues={{
        meno: 'MENO',
        email: 'EMAIL',
        telefon: 'TELEFÓN',
        odkaz: 'ODKAZ',
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // eslint-disable-next-line no-alert
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="contactForm__container">
          <div className="contactForm__container__main">
            <Field type="name" name="meno" />
            <ErrorMessage name="meno" component="div" />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="tel" name="telefon" />
            <ErrorMessage name="telefon" component="div" />
          </div>
          <div className="contactForm__container__textarea">
            <Field type="textarea" name="odkaz" />
          </div>
          <ErrorMessage name="odkaz" component="div" />
          <div className="contactForm__container__button">
            <button type="submit" disabled={isSubmitting}>
              ODOSLAŤ
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default ContactForm;
