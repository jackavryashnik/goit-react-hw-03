import { useId } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import css from './ContactForm.module.css';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Min length 3')
    .max(50, 'Too Long! Max length 50')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short! Min length 3')
    .max(50, 'Too Long! Max length 50')
    .required('Required'),
});

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
      validationSchema={SignupSchema}
    >
      <Form className={css.form}>
        <div className={css.inputWrapper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>

        <div className={css.inputWrapper}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
