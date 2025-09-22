import React, { useState, useRef } from 'react'

const AddToDO = ({ onAddclick }) => {

    const setItemElement = useRef();
    const setDueDateElement = useRef();

    const onAddBottonclicked = (e) => {
        e.preventDefault();
        const dueItem = setItemElement.current.value;
        const dueDate = setDueDateElement.current.value;
        setItemElement.current.value = "";
        setDueDateElement.current.value = "";
        onAddclick(dueItem, dueDate)
    }
    return (
        <div className="container text-center">
            <div className="row kg-row">
                <div className="col-6">
                    <input type="text" ref={setItemElement} placeholder="Enter Todo Here" />
                </div>
                <div className="col-4">
                    <input type="date" ref={setDueDateElement} />
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
