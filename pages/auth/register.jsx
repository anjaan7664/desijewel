import React, { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
async function createUser(email, password) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}
const Register = () => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const [errors, setErrors] = useState({});

  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    try {
      const result = await createUser(enteredEmail, enteredPassword);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  const handleLoginForm = async (evt) => {
    evt.preventDefault();

    const result = await signIn("credentials", {
      redirect: true,
      username: credentials.username,
      password: credentials.password,
    });
    console.log(result);

    setErrors((errors) => ({ ...validateCredentials(credentials) }));
  };

  return (
    <React.Fragment>
      <div className="z-50 w-full max-w-md p-6 m-4 mx-auto bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
            Sign Up
          </h2>
        </div>
        <form className="mt-8" onSubmit={submitHandler}>
          <input type="hidden" name="remember" value="true" />
          <div>
            <div className="mb-3">
              <input
                aria-label="Username"
                name="username"
                type="username"
                id="username"
                ref={usernameInputRef}
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:shadow-outline-blue focus:z-10 focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5"
                placeholder="Username"
              />
              {errors.hasOwnProperty("username") && (
                <p className="text-xs italic text-red-500">{errors.username}</p>
              )}
            </div>
            <div>
              <input
                id="password"
                aria-label="Password"
                name="password"
                ref={passwordInputRef}
                type="password"
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:shadow-outline-blue focus:z-10 focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5"
                placeholder="Password"
              />
              {errors.hasOwnProperty("username") && (
                <p className="text-xs italic text-red-500">{errors.username}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input
                v-model="form.remember"
                id="remember_me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
              />
              <label className="block ml-2 text-sm leading-5 text-gray-900">
                Remember me
              </label>{" "}
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
            </div>

            <div className="text-sm leading-5">
              <a
                href="#"
                className="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:underline focus:outline-none"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md group focus:shadow-outline-indigo hover:bg-indigo-500 focus:border-indigo-700 focus:outline-none active:bg-indigo-700"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Register;
