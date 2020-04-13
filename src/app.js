import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => {
    return(
        <div>
            This is from my dashboard component
        </div>
    );
}

const AddExpensePage = () => {
    return(
        <div>
            This is from my Add expense component
        </div>
    );
}
const EditExpensePage = () => {
    return(
        <div>
            This is from my Edit expense component
        </div>
    );
}

const HelpPage = () => {
    return(
        <div>
            This is from my help component
        </div>
    );
}

const NotFoundPage = () => {
    return(
        <div>
          404!
        </div>
    );
}


const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ExpenseDashboardPage}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>

    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'))


