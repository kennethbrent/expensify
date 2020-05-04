import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';


const ExpenseListItem = (props) => (
    <div>
        <NavLink to={`edit/${props.id}`}>{props.description}</NavLink>
        <p>{props.amount}</p>
        <p>{props.createdAt}</p>
  
    </div>
)

export default connect()(ExpenseListItem)