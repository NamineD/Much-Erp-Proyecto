import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/features/authSlice";

import './Login.css'

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  /* const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error); */

  const [userName, setUserName] = useState("");
  const [ pwd, setPwd ] = useState('')



  const LoginHandler = (e) => {
    e.preventDefault();
    dispatch(login({ username: userName, password: pwd }));
    navigate('/')
  };

  const handleUserInput = (e) => setUserName(e.target.value)
  const handlePwdInput = (e) => setPwd(e.target.value)


  return (
    <div className="container">
      <div className="row vh-100 justify-content-around align-items-center">
        <div className="card p-0">
          <div className="row vh-100 g-0">
            <div className="col-md-6">
              <form className="card-body" onSubmit={LoginHandler}>
                <h4 className="card-title">Login</h4>
                <p className="card-text mb-3"><small className="text-header text-muted">If you already a member, easily log in</small></p>
                <div className="form-row">
                  <input className="form-control mb-3" id="username" type="text" placeholder="User Name*" value={userName} onChange={handleUserInput} required />
                  <label htmlFor="exampleFormControlInput1" className="form-label">User Name*</label>
                </div>
                <div className="form-row">
                  <input className="form-control mb-5" id="password" type="password" placeholder="Password*" required value={pwd} onChange={handlePwdInput}/>
                  <label htmlFor="inputPassword" className="form-label">Password*</label>
                </div>
                <button type="submit" className="btn mb-3">LOG IN</button>
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
      </div>
    </div>
  );
};

export default Login;
