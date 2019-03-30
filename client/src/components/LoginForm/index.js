import React from "react";

function LoginForm(props) {
  return (
    <div className="text-center mb-4">
      <h1>
        Log in to Traffic<span className="text-danger">Mon</span>!
      </h1>
      <form className="text-center" onSubmit={props.handleSubmit}>
        <label>
          <strong>User Name:</strong>
          <input
            type="text"
            name="username"
            value={props.value}
            onChange={props.onChange}
          />
        </label>

        <label>
          <strong className="ml-2">Password:</strong>
          <input
            type="password"
            name="password"
            value={props.value}
            onChange={props.onChange}
          />
        </label>

        <button
          className="btn btn-primary ml-2"
          onClick={props.onClick}
          variant="primary"
          size="sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
