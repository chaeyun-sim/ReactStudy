import React, { useState } from "react";
import Card from '../UI/Card.jsx'
import Button from "../UI/Button.jsx";
import ErrorModal from "../UI/ErrorModal.jsx";
import styles from './AddUser.module.css'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        // console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
        document.getElementById("username").focus();
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input}>  {/* css를 사용자 커스텀 컴포넌트에서 쓰려면 props로 줘야함.*/}
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={usernameChangeHandler} value={enteredUsername} />
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge} />
                    {/* <button type="submit">Add User</button> */}
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
};

export default AddUser;