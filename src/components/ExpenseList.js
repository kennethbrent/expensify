import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense)=>{
            return (
                <ExpenseListItem key={expense.id} id={expense.id} amount={expense.amount} description={expense.description} createdAt={expense.createdAt}/>
            )
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses:selectExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList);
