import React from "react";
import './Login.css'

const Login = () => {
  return (
      <div className="card p-0">
        <div className="row vh-100 g-0">
          <div className="col-md-6">
            <form className="card-body">
              <h4 className="card-title">Login</h4>
              <p className="card-text mb-3"><small className="text-header text-muted">If you already a member, easily log in</small></p>
              <div className="form-row">
                <input className="form-control mb-3" type="text" placeholder="User Name*" required />
                <label for="exampleFormControlInput1" className="form-label">User Name*</label>
              </div>
              <div className="form-row">
                <input className="form-control mb-5" type="password" placeholder="Password*" required />
                <label for="inputPassword" className="form-label">Password*</label>
              </div>
              <button type="button" className="btn mb-3">LOG IN</button>
              <hr className="mb-4"/>
              <button type="button" className="btn mb-3">LOG IN WITH GOOGLE</button>
              <p className="card-text mb-0"><small className="text-muted">Forgot your password?</small></p>
              <hr />
            </form>
          </div>
          <div className="img-login col-md-6">
            <img
              src="https://app.muchflowers.com/7054180.png"
              className="img-fluid rounded-start"
              alt="Login"
            />
          </div>
        </div>
      </div>
  );
};

export default Login;
