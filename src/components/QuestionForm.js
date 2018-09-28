import React from 'react';
import CategoriesFormSelectBox from './CategoriesFormSelectBox';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup'; //Note change with V0.25

const InnerForm= ({ values, errors, touched, isSubmitting, setFieldValue, handleChange, onCancel}) => (
  <div>
    <Form className='form'>
      <div>
        <div>
          <button disabled={isSubmitting} className='button button--form'>
          Submit
          </button>
        </div>
        <div className='spacer--med'>
        </div>
        <div>
          <label className='label'>
            Language 
            <Field component='select' name='language' className='select'>
              <option value='javascript'>Javascript</option>
            </Field>
          </label>
        </div>
        <div className='radio-group'>
          <label className='tick-container'>
            Level 1
            <Field type='radio' name='level' id='1' value='1' checked={values.level ==='1'} />
            <span className='radio-checkmark'></span>
          </label>
          <label className='tick-container'>
            Level 2
            <Field type='radio' name='level' id='2' value='2' checked={values.level ==='2'} />
            <span className='radio-checkmark'></span>
          </label>
          <label className='tick-container'>
            Level 3
            <Field type='radio' name='level' id='3' value='3' checked={values.level ==='3'} />
            <span className='radio-checkmark'></span>
          </label>
        </div>
        <div>
          <label className='label'>
            Category
            <CategoriesFormSelectBox 
              categories={values.categories} 
              onChange={setFieldValue}
              value={values.category}
            />
          </label>
        </div>
        <p className='error'>{errors.question}</p>
        <Field
          component = 'textarea'
          className = 'textarea'
          name='question'
          placeholder='Question'
        />
        <div>
          <label className='label'>
            Question Type 
            <Field component='select' name='questionType' className='select'>
              <option value='single'>Only one correct answer</option>
              <option value='multi'>More than one correct</option>
            </Field>
          </label>
        </div>
        <p className='error'>{errors.overall}</p>
        <div>
          <p>{errors.answer1Correct}</p>
          <label className='tick-container'>
            Answer 1 Correct
            <Field type='checkbox' name='answer1Correct' checked={values.answer1Correct === true}/>
            <span className='box-checkmark'></span>
          </label>
        </div>
        <p className='error'>{errors.answer1}</p>
        <Field
          component = 'textarea'
          className = 'textarea'
          name='answer1'
          placeholder='Answer 1'
        />
        <div>
          <label className='tick-container'>
            Answer 2 Correct
            <Field type='checkbox' name='answer2Correct' checked={values.answer2Correct === true}/>
            <span className='box-checkmark'></span>
          </label>
        </div>
        <p className='error'>{errors.answer2Correct}</p>
        <Field
          component = 'textarea'
          className = 'textarea'
          name='answer2'
          placeholder='Answer 2'
        />
        <div>
          <label className='tick-container'>
            Answer 3 Correct
            <Field type='checkbox' name='answer3Correct' checked={values.answer3Correct === true}/>
            <span className='box-checkmark'></span>
          </label>
        </div>
        <p className='error'>{errors.answer3Correct}</p>
        <Field
          component = 'textarea'
          className = 'textarea'
          name='answer3'
          placeholder='Answer 3'
        />
        <div>
          <label className='tick-container'>
            Answer 4 Correct
            <Field type='checkbox' name='answer4Correct' checked={values.answer4Correct === true}/>
            <span className='box-checkmark'></span>
          </label>
        </div>
        <p className='error'>{errors.answer4Correct}</p>
        <Field
          component = 'textarea'
          className = 'textarea'
          name='answer4'
          placeholder='Answer 4'
        />
        <div>
          <label className='tick-container'>
            Answer 5 Correct
            <Field type='checkbox' name='answer5Correct' checked={values.answer5Correct === true}/>
            <span className='box-checkmark'></span>
          </label>
        </div>
        <p className='error'>{errors.answer5Correct}</p>
        <Field
          component = 'textarea'
          className = 'textarea'
          name='answer5'
          placeholder='Answer 5'
        />
        <div>
          <label className='tick-container'>
            Answer 6 Correct
            <Field type='checkbox' name='answer6Correct' checked={values.answer6Correct === true}/>
            <span className='box-checkmark'></span>
          </label>
        </div>
        <p className='error'>{errors.answer6Correct}</p>
        <Field
          component = 'textarea'
          className = 'textarea'
          name='answer6'
          placeholder='Answer 6'
        />
      </div>
      <button type='submit' disabled={isSubmitting} className='button button--form'>
        Submit
      </button>
      <button type='button' disabled={isSubmitting} onClick={onCancel}>
        Cancel
      </button>
    </Form>
  </div>
)

const PostForm = withFormik({
  mapPropsToValues: props => {
    return {
      language : props.question.language || '',
      level : props.question.level || '1',
      category : props.question.category || '',
      question : props.question.question || '',
      questionType : props.question.questionType || 'single',
      answer1Correct : props.question.answer1Correct || false,
      answer1 : props.question.answer1 || '',
      answer2Correct : props.question.answer2Correct || false,
      answer2 : props.question.answer2 || '',
      answer3Correct : props.question.answer3Correct || false,
      answer3 : props.question.answer3 || '',
      answer4Correct : props.question.answer4Correct || false,
      answer4 : props.question.answer4 || '',
      answer5Correct : props.question.answer5Correct || false,
      answer5 : props.question.answer5 || '',
      answer6Correct : props.question.answer6Correct || false,
      answer6 : props.question.answer6 || '',
      categories : props.categories
    };
  },
  validationSchema: Yup.object().shape({
    question: Yup.string().min(5, 'Question must be 5 characters or longer').required('Question is required'),
    answer1: Yup.string().min(5, 'Answer 1 must be 5 characters or longer').required('Answer 1 is required')
  }),
  handleCancel: () => {
    props.onCancel();
  },
  handleSubmit: (values, { resetForm, setErrors, setSubmitting, props }) => {

    let countQuestionsCorrect = 0;
    if(values.answer1Correct) {
      countQuestionsCorrect++;}
    if(values.answer2Correct) {
      countQuestionsCorrect++;}
    if(values.answer3Correct) {
      countQuestionsCorrect++;}
    if(values.answer4Correct) {
      countQuestionsCorrect++;}
    if(values.answer5Correct) {
      countQuestionsCorrect++;}
    if(values.answer6Correct) {
      countQuestionsCorrect++;}

    let countErrors = 0;

    if (values.answer1Correct && !values.answer1) {
      countErrors++;
      setErrors({answer1Correct: 'If answer is correct then need answer filled in' });
    }
    if (values.answer2Correct && !values.answer2) {
      countErrors++;
      setErrors({answer2Correct: 'If answer is correct then need answer filled in' });
    }
    if (values.answer3Correct && !values.answer3) {
      countErrors++;
      setErrors({answer3Correct: 'If answer is correct then need answer filled in' });
    }
    if (values.answer4Correct && !values.answer4) {
      countErrors++;
      setErrors({answer4Correct: 'If answer is correct then need answer filled in' });
    }
    if (values.answer5Correct && !values.answer5) {
      countErrors++;
      setErrors({answer5Correct: 'If answer is correct then need answer filled in' });
    }
    if (values.answer6Correct && !values.answer6) {
      countErrors++;
      setErrors({answer6Correct: 'If answer is correct then need answer filled in' });
    }

    if (values.questionType === 'single') {
      if(countQuestionsCorrect === 0) {
        countErrors++;
        setErrors({overall: 'At least one answer must be marked as correct' });
      } else if(countQuestionsCorrect > 1) {
        countErrors++;
        setErrors({overall : 'Only one answer can be correct'});
      }
    } else if (values.questionType === 'multi') {
      if(countQuestionsCorrect < 2) {
        countErrors++;
        setErrors({overall: 'You have selected \'More than one correct\' - Mark more than one answer as correct' });
      }
    }

    if (countErrors === 0) {
      resetForm();
    } else {
      setSubmitting(false);
      return;
    }

    props.onSubmit(values);
  }
})(InnerForm);

export default PostForm