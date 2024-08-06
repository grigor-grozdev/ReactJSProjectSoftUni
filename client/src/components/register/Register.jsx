import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import { useRegister } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';

import styles from "../register/Register.module.css";


const initialValues = { username: '', email: '', password: '', repassword: '' };

export default function Register() {
  const [error, setError] = useState('');
    
  const register = useRegister();
  const navigate = useNavigate();

  const focusHandler = (e) => {
    e.target.setAttribute('focused', 'true')
  };

  const registerHandler = async ({ username, email, password }) => {
    try {
      await register(username, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  }

  const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="/bike.jpg"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register Form
        </h2>
      </div>


      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form method="POST" className="space-y-6" onSubmit={submitHandler}>

          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                value={values.username}
                onChange={changeHandler}
                onBlur={focusHandler}
                focused="false"
                required
                pattern='[a-z0-9]{3,16}'
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <span className={styles.error}>Username should be 3-16 characters and shouldn't include any special character, only letters and numbres!</span>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={changeHandler}
                onBlur={focusHandler}
                focused="false"
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <span className={styles.error}>It should be a valid email address!</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>

            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={changeHandler}
                onBlur={focusHandler}
                focused="false"
                required
                pattern='(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]){6,20}'
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <span className={styles.error}>Password should be 6-20 characters and include at least 1 letter and 1 number!</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="repassword" className="block text-sm font-medium leading-6 text-gray-900">
                Repeat Password
              </label>

            </div>
            <div className="mt-2">
              <input
                id="repassword"
                name="repassword"
                type="password"
                value={values.repassword}
                onChange={changeHandler}
                onBlur={focusHandler}
                focused="false"
                required
                pattern={values.password}
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <span className={styles.error}>Passwords don't match!</span>
            </div>
          </div>

          {error && <p className="text-white border rounded-md bg-red-500 font-semibold px-3 py-1.5">{error}</p>}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-800"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already registered?{' '}
          <Link to="/login" className="font-semibold leading-6 text-bg-gray-900 hover:text-bg-gray-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}