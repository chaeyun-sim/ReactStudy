import React, { useState } from "react";

const MyBasicForm = (props) => {
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [touched, setTouched] = useState(false);

  const NameValidation = (value) => {
    if(value){
      return value.length < 3 && touched
    }
  };

  const EmailValidation = (value) => {
    if(value) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      return !regex.test(value);
    }
  };

  const firstNameChangeHandler = (event) => {
    setFirstNameInput(event.target.value)
    setTouched(true);
  };

  const lastNameChangeHandler = (event) => {
    setLastNameInput(event.target.value);
    setTouched(true);
  };

  const emailChangeHandler = (event) => {
    setEmailInput(event.target.value);
    setTouched(true);
  }
 
  const submitHandler = (event) => {
    event.preventDefault();

    if (!firstNameInput || !lastNameInput || !emailInput){
      alert('Please fill in all the inputs')
      return;
    };
    
    if(!NameValidation(firstNameInput) && !NameValidation(lastNameInput) && !EmailValidation(emailInput)) {
      console.log(firstNameInput)
      console.log(lastNameInput)
      console.log(emailInput)
    } else {
      return;
    }

    setFirstNameInput('');
    setLastNameInput('');
    setEmailInput('');
  };

  return (
    <form>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameChangeHandler} value={firstNameInput} />
          {NameValidation(firstNameInput) && <p className="error-text ">Firstname must be more than 3 letters. </p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameChangeHandler} value={lastNameInput} />
          {NameValidation(lastNameInput) && <p className="error-text ">Lastname must be more than 3 letters. </p>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='email' onChange={emailChangeHandler} value={emailInput} />
        {EmailValidation(emailInput) && <p className="error-text ">Invalid email format</p>}
      </div>
      <div className='form-actions'>
        <button onClick={submitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default MyBasicForm;