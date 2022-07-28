/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useState} from "react";

import Kyc from "./Kyc";

const KycContainer = () => {
  const [step, updateStep] = useState(2);
  const [formData, setFormData] = useState({
    selfie: null,
    poi: null,
    poa: null,
    inputData: null
  });

  console.log(formData)

  const handleImageClick = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <Kyc
      formData={formData}
      setFormData={setFormData}
      step={step}
      updateStep={updateStep}
      handleImageClick={handleImageClick}
    />
  );
};

export default KycContainer;
