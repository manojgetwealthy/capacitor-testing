/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useState} from "react";

import InputData from "./InputData";

const InputDataContainer = ({
  formData,
  updateStep,
  handleFormData
}) => {
  const [userData, setUserData] = useState({
    name: "",
    accountNumber: "",
    ifscCode: "",
    address: ""
  });

  const handleUserInput = (event) => {
    const {
      name,
      value
    } = event.target;

    setUserData({
      ...userData,
      [name]: value
    })
  };

  const handleSubmitUserData = () => {
    handleFormData("userData", userData);
    updateStep(5);
  };

  return (
    <InputData
      updateStep={updateStep}
      userData={userData}
      handleUserInput={handleUserInput}
      handleSubmitUserData={handleSubmitUserData}
    />
  );
};

export default InputDataContainer;
