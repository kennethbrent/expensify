import {createStore, combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid';

//ADD Expense
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})
//Remove Expense/
//Edit Expense
//Set text filter
// Sort by date
//Sort by amount
//Set start date
//Set end date

//Expenses Reducer

const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case'ADD_EXPENSE': 
            return [
                ...state,
                action.expense
            ]
        default:
            return state;
    }
}

//Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        default: 
            return state
    }
}


//Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addExpense({description: 'Rent', amount: 100}))
store.dispatch(addExpense({description: 'Rent', amount: 300}))


const demoState = {
    expenses: [{
        id: 'was',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
        //date or amount
    }
}