import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm  expenses={expenses[1]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render error for invalid form submission', ()=>{
    const wrapper = shallow(<ExpenseForm/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault:()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should set description on input change', ()=>{
    const value= 'New description ay'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('description')).toBe(value);
})

test('should set note value on textarea change', ()=>{
    const value = "New note value bitch";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value)
})

test('should set amout if valid input', ()=>{
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value);
})

test('should not set amout if invalid input', ()=>{
    const value = '23.540.552';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('amount')).toBe('');
})