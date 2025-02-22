import React from "react";
import InputType from "./InputType";
import { useState } from "react";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <form>
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        {/* switch statement */}
        {/* eslint-disable-next-line */}
        {(() => {
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText={"email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <InputType
                    labelText={"password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return(
              <>
                <InputType
                  labelText={"Name"}
                  labelFor={"forName"}
                  inputType={"text"}
                  name={"Name"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <InputType
                  labelText={"Organisation Name"}
                  labelFor={"forOrganisationName"}
                  inputType={"text"}
                  name={"organisationName"}
                  value={organisationName}
                  onChange={(e) => setOrganisationName(e.target.value)}
                />

                <InputType
                  labelText={"Hospital Name"}
                  labelFor={"forHospitalName"}
                  inputType={"text"}
                  name={"hospitalName"}
                  value={hospitalName}
                  onChange={(e) => setHospitalName(e.target.value)}
                />

                <InputType
                  labelText={"Website"}
                  labelFor={"forWebsite"}
                  inputType={"text"}
                  name={"website"}
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />

                <InputType
                  labelText={"Address"}
                  labelFor={"forAddress"}
                  inputType={"text"}
                  name={"address"}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

                <InputType
                  labelText={"Phone"}
                  labelFor={"forPhone"}
                  inputType={"text"}
                  name={"phone"}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </>
              )
            }
          }
        })()}

        <div className="d-flex">
          <button className="btn btn-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
