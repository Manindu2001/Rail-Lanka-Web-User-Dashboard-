import React from "react";
import "./Style.css";

function Login() {
  return (
    <div className="containert-fluid bg">
      <div className="container-lg">
        <div className="row justify-content-center align-items-center d-flex vh-100">
          <div
            className="col-11 col-md-8 text-center border-5 shadow-lg rounded-5 bgForm ms-2 me-2"
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 2)" }}
          >
            <form className="p-5">
              <div className="mb-3 ">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <a
                href="/home"
                type="submit"
                className="btn btn-secondary ps-5 pe-5 me-3 d-inline  "
              >
                Login
              </a>

              <a
                href="/PwResetInstuction"
                className="text-danger d-flex mt-2 align-items-start text-center "
              >
                Forget Password ?
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
