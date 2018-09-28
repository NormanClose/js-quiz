import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import QuestionForm from '../../components/QuestionForm';
import questions from '../fixtures/questions';
import categories from '../fixtures/categories'

test('should render QuestionForm correctly', () => {
  const wrapper = shallow(<QuestionForm question={{}} onSubmit={{}} categories = {categories} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render QuestionForm correctly with question data', () => {
  const wrapper = shallow(<QuestionForm question={questions[1]} onSubmit={{}} categories = {categories} />);
  expect(wrapper).toMatchSnapshot();
});


