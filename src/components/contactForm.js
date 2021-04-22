import React from 'react';
import Fade from 'react-reveal/Fade';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// contact form with form validation and specific schema
const ContactForm = () => (
  <div id="contactForm">
    <Fade bottom delay={200} duration={1200}>
      <Formik
        initialValues={{
          meno: '',
          email: '',
          telefon: '',
          odkaz: '',
        }}
        validationSchema={Yup.object({
          meno: Yup.string().required('Toto pole musí byť vyplnené'),
          email: Yup.string()
            .email('Nesprávny formát emailovej adresy')
            .required('Toto pole musí byť vyplnené'),
          telefon: Yup.number()
            .required('Toto pole musí byť vyplnené')
            .positive(),
          odkaz: Yup.string()
            .min(10, 'Odkaz musí mať minimálne 10 znakov')
            .required('Toto pole musí byť vyplnené'),
        })}
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
            <div className="contactForm__container__main__and__textarea">
              <div className="contactForm__container__main">
                <Field type="name" name="meno" placeholder="MENO" />
                <ErrorMessage
                  name="meno"
                  component="div"
                  style={{ color: 'red' }}
                />
                <Field type="email" name="email" placeholder="EMAIL" />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: 'red' }}
                />
                <Field type="tel" name="telefon" placeholder="TELEFÓN" />
                <ErrorMessage
                  name="telefon"
                  component="div"
                  style={{ color: 'red' }}
                />
              </div>
              <div className="contactForm__container__textarea">
                <Field
                  name="odkaz"
                  as="textarea"
                  className="contactForm__textarea"
                  placeholder="ODKAZ"
                />
                <ErrorMessage
                  name="odkaz"
                  component="div"
                  style={{ color: 'red', marginLeft: '0.5em' }}
                />
              </div>
            </div>
            <div className="contactForm__container__button">
              <button type="submit" disabled={isSubmitting}>
                ODOSLAŤ
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Fade>
  </div>
);

export default ContactForm;
