import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [formStart, setFormStart] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        // console.log(expenseData)
        props.onAddExpense(expenseData);
        console.log('NewExpense.jsx', expenseData)
        setFormStart(false);
    };

    const cancelHandler = () => {
        setFormStart(false);
    }

    const formHandler = () => {
        setFormStart(true);
    }

    let formBrowser = <button onClick={formHandler}>Add New Expense</button>

    if (formStart) {
        formBrowser = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} />
    };
    
    
    return (
        <div className="new-expense">
            {formBrowser}
        </div>
    )
}

export default NewExpense;