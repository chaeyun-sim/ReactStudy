import React, { useEffect, useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT'){
    return {value : action.val, isValid: action.val.includes('@')}
  }
  if (action.type === 'INPUT_BLUR'){
    return {value: state.value, inValid: state.value.includes('@') }
  }
  return {value : '', isValid: false}
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT'){
    return {value : action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === 'INPUT_BLUR'){
    return {value: state.value, inValid: state.value.trim().length > 6 }
  }
  return {value : '', isValid: false}
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
  // invalid를 false가 아닌 null로 해둬야 처음부터 blur를 하지 않고 클릭을 해야만 blur이 된다.
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

  // valid email에 문자 하나를 추가한다고 해서 validation이 다시 일어나지는 않는다.
  // 그러나 useEffect는 문자를 추가할때마다 업데이트가 되니 이를 수정해보자.
  const { isValid: emailIsValid } = emailState;  // 별칭할당
  const { isValid: passwordIsValid } = passwordState;
  // 원래의 emailState와 passwordState가 아닌 state 내부의 isValid 값을 useEffect에서 사용하도록 만드는 것.
  // {..} 중속성을 사용하는 이유는 개체 자체를 dependencies에 추가하게 되면 특정 속성이 변경될때마다 객체가 재실행되기 때문이다. -> 낭비!

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailIsValid.includes('@') && passwordIsValid.trim().length > 6
      );
    }, 500);

    return () => {
      console.log("CLEAN UP")
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);


  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})

    setFormIsValid(
      // event.target.value.includes('@') && enteredPassword.trim().length > 6
      event.target.value.includes('@') && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: 'USER_INPUT', val: event.target.value})

    setFormIsValid(
      // event.target.value.trim().length > 6 && enteredEmail.includes('@')
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
    // props.onLogin(emailState.value, enteredPassword)
    props.onLogin(emailState.value, passwordState.value)
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            // emailIsValid === false ? classes.invalid : ''
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            // value={enteredEmail}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            // passwordIsValid === false ? classes.invalid : ''
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            // value={enteredPassword}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
