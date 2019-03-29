import React from "react";
import "./style.css";

function LoginForm(props) {
  return (
    <div className="container backgroundcolor loginform">
    <div className="text-center mb-4">
      <h1>
        Log in to Traffic<span className="text-danger h1">Mon</span>!
      </h1>
      <form className="text-center form" onSubmit={props.handleSubmit}>
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
          className="btn btn-primary ml-4"
          onClick={props.onClick}
          variant="primary"
          size="sm"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default LoginForm;
