import moment from 'moment';
import {setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should sort by Amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({type:'SORT_BY_AMOUNT'})
})

test('should set sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({type:'SORT_BY_DATE'})
})

test('should set default text filter', ()=> {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: ''
    })
})

test('should set custom text filter', ()=> {
    const action = setTextFilter('brent');
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: 'brent'
    })
})