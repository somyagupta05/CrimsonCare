import React from "react";
import Form from "../../components/Shared/Form/Form";
// import InputType from "../../components/Shared/Form/InputType";
// import { name } from './../../../node_modules/jiti/dist/babel';

const Login = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner">
          <img src="./assests/images/banner1.jpg" />
        </div>
        <div className="col-md-4 form-container">
          <Form formTitle={'Login Page'} submitBtn={'login'}/>
        </div>
      </div>
    </>
  );
};

export default Login;
