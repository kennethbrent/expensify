import React from 'react'

const EditExpensePage = (props) => {
    console.log(props)
    return(
        <div>
            Editing the expense with ID of {props.match.params.id}
        </div>
    );
}

export default EditExpensePage