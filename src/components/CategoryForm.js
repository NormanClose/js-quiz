import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup'; //Note change with V0.25

const InnerForm= ({ values, errors, touched, isSubmitting}) => (
  <div>
    <Form className='form'>
      <div>
        <div>
          <label className='label'>
            Category 
            <Field component='input' name='category' className='text-input'>
            </Field>
          </label>
        </div>
      </div>
      <button disabled={isSubmitting} className='button button--form'>
        Submit
      </button>
    </Form>
  </div>
)

const PostForm = withFormik({
  mapPropsToValues: props => {
    return {
      category : props.category.category || ''
    };
  },
  // validationSchema: Yup.object().shape({
  //   question: Yup.string().min(5, 'Question must be 5 characters or longer').required('Question is required'),
  //   answer1: Yup.string().min(5, 'Answer 1 must be 5 characters or longer').required('Answer 1 is required')
  // }),
  handleSubmit: (values, { resetForm, setErrors, setSubmitting, props }) => {

    setSubmitting(false);
    props.onSubmit(values);
  }
})(InnerForm);

export default PostForm