import React from "react";
import InputType from "../../components/Shared/Form/InputType";
// import { name } from './../../../node_modules/jiti/dist/babel';

const Login = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-8 form-banner">
          <img src="./assests/images/banner1.jpg" />
        </div>
        <div className="col-md-4 form-container">
          <form>
          <InputType labelText={'EMail Address'} labelFor={'forEMail'} inputType={'email'} name={"email"}/>
           

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
