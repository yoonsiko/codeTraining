//import { useState } from "react";
import Input from './Input.jsx'
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";
// Using State

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  /* const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  })

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  }) */

  /* function handleInputChange(identifier, value) {

    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }))
  };

  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }))
  } */

  /* return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur('email')}
          onChange={(event) => { handleInputChange('email', event.target.value) }}
          value={enteredValues.email}
          error={emailIsInvalid && 'Please enter a valid email'}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur('password')}
          onChange={(event) => { handleInputChange('password', event.target.value) }}
          value={enteredValues.password}
          error={passwordIsInvalid && 'Please enter a valid password'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  ); */

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    harError: passwordHasError
  } = useInput('', (value) => hasMinLength(value, 6))

  //const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && isNotEmpty(enteredValues.email)
  //const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && 'Please enter a valid email'}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && 'Please enter a valid password'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}

/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email"
            onBlur={() => handleInputBlur('email')}
            onChange={(event) => { handleInputChange('email', event.target.value) }}
            value={enteredValues.email} />

          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
            onChange={(event) => { handleInputChange('password', event.target.value) }}
            value={enteredValues.password} />
        </div> */