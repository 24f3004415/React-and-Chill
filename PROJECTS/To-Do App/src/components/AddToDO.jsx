import React, { useState } from 'react'

const AddToDO = ({ onAddclick }) => {

    const [dueItem, setDueitem] = useState()
    const [dueDate, setDuedate] = useState()

    const handlesetDueitem = (event) => {
        setDueitem(event.target.value)
    }
    const handlesetDueitemdate = (event) => {
        setDuedate(event.target.value)
    }

    const onAddBottonclicked = ()=>{
        onAddclick(dueItem, dueDate)
        setDueitem("")
        setDuedate("")
    }
    return (
        <div className="container text-center">
            <div className="row kg-row">
                <div className="col-6">
                    <input type="text" placeholder="Enter Todo Here" onChange={handlesetDueitem} value={ dueItem }/>
                </div>
                <div className="col-4">
                    <input type="date" onChange={ handlesetDueitemdate } value={ dueDate } />
                </div>
                <div className="col-2">
                    <button onClick={onAddBottonclicked} type="button" className="btn btn-success  w-50">
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddToDO
