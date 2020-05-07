import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, setStartDate,setEndDate,sortByDate, sortByAmount} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore()

store.dispatch(addExpense({amount: 4500, description: 'Water Bill', createdAt:3000}))
store.dispatch(addExpense({amount: 8900, description: 'Gas Bill', createdAt:1000}))
store.dispatch(addExpense({amount: 1095, description: 'Rent', createdAt:12000}))



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log(visibleExpenses)
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'))


