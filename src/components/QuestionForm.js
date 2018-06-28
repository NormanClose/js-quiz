import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup'; //Note change with V0.25

const InnerForm= ({ values, errors, touched, isSubmitting}) => (
  <div>
    <Form>
      <div>
        <div>
          <label>
            Language 
            <Field component='select' name='language'>
              <option value='javascript'>Javascript</option>
              <option value='typescript'>Typescript</option>
            </Field>
          </label>
        </div>
        <div>
          <label>
            Level 1
            <Field type='radio' name='level' id='1' value='1' checked={values.level ==='1'}/>
          </label>
          <label>
            Level 2
            <Field type='radio' name='level' id='2' value='2' checked={values.level ==='2'}/>
          </label>
          <label>
            Level 3
            <Field type='radio' name='level' id='3' value='3' checked={values.level ==='3'}/>
          </label>
        </div>
        <p>{errors.question}</p>
        <Field
          component = 'textarea'
          name='question'
          placeholder='Question'
        />
        <div>
          <label>
            Question Type 
            <Field component='select' name='questionType'>
              <option value='single'>Only one correct answer</option>
              <option value='multi'>More than one correct</option>
            </Field>
          </label>
        </div>
        <p>{errors.overall}</p>
        <div>
          <p>{errors.answer1Correct}</p>
          <label>
            Answer 1 Correct
            <Field type='checkbox' name='answer1Correct'/>
          </label>
        </div>
        <p>{errors.answer1}</p>
        <Field
          component = 'textarea'
          name='answer1'
          placeholder='Answer 1'
        />
        <div>
          <p>{errors.answer2Correct}</p>
          <label>
            Answer 2 Correct
            <Field type='checkbox' name='answer2Correct'/>
          </label>
        </div>
        <Field
          component = 'textarea'
          name='answer2'
          placeholder='Answer 2'
        />
        <div>
          <p>{errors.answer3Correct}</p>
          <label>
            Answer 3 Correct
            <Field type='checkbox' name='answer3Correct'/>
          </label>
        </div>
        <Field
          component = 'textarea'
          name='answer3'
          placeholder='Answer 3'
        />
        <div>
          <p>{errors.answer4Correct}</p>
          <label>
            Answer 4 Correct
            <Field type='checkbox' name='answer4Correct'/>
          </label>
        </div>
        <Field
          component = 'textarea'
          name='answer4'
          placeholder='Answer 4'
        />
        <div>
          <p>{errors.answer5Correct}</p>
          <label>
            Answer 5 Correct
            <Field type='checkbox' name='answer5Correct'/>
          </label>
        </div>
        <Field
          component = 'textarea'
          name='answer5'
          placeholder='Answer 5'
        />
        <div>
          <p>{errors.answer6Correct}</p>
          <label>
            Answer 6 Correct
            <Field type='checkbox' name='answer6Correct'/>
          </label>
        </div>
        <Field
          component = 'textarea'
          name='answer6'
          placeholder='Answer 6'
        />
        
      </div>
      <button disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  </div>
)

const PostForm = withFormik({
  mapPropsToValues({ language,
      question,
      level,
      questionType,
      answer1Correct,answer1,
      answer2Correct,answer2,
      answer3Correct,answer3,
      answer4Correct,answer4,
      answer5Correct,answer5,
      answer6Correct,answer6}) {
    return {
      language : language || '',
      level : level || '1',
      question : question || '',
      questionType : questionType || 'single',
      answer1Correct : answer1Correct || false,
      answer1 : answer1 || '',
      answer2Correct : answer2Correct || false,
      answer2 : answer2 || '',
      answer3Correct : answer3Correct || false,
      answer3 : answer3 || '',
      answer4Correct : answer4Correct || false,
      answer4 : answer4 || '',
      answer5Correct : answer5Correct || false,
      answer5 : answer5 || '',
      answer6Correct : answer6Correct || false,
      answer6 : answer6 || ''
    };
  },
  // validationSchema: Yup.object().shape({
  //   question: Yup.string().min(5, 'Question must be 5 characters or longer').required('Question is required'),
  //   answer1: Yup.string().min(5, 'Answer 1 must be 5 characters or longer').required('Answer 1 is required')
  // }),
  handleSubmit: (values, { resetForm, setErrors, setSubmitting, props }) => {

    console.log(values);
      
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

    //alert('countQuestionsCorrect' + countQuestionsCorrect )

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
      if(countQuestionsCorrect === 0) {
        countErrors++;
        setErrors({overall: 'At least one answer must be marked as correct' });
      }
    }

    if (countErrors === 0) {
      alert('Yay no errors');
      resetForm();
    }

    setSubmitting(false);
    props.onSubmit(values);
  }
})(InnerForm);

export default PostForm