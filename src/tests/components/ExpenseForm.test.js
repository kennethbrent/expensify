import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseFrom from '../../components/ExpenseForm';
import ExpenseForm from '../../components/ExpenseForm';

test('should render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot()
})