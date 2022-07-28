/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useState, useEffect, useRef} from "react";

import Kyc from "./Kyc";

const KycContainer = () => {
  const [step, updateStep] = useState(5);
  const [formData, setFormData] = useState({
    selfie: null,
    poi: null,
    poa: null,
    userData: null
  });

  console.log(formData)
  // const isInitialRender = useRef();


  // useEffect(() => {
  //   if (isI)
  //   alert(navigator.userAgent)
  // }, []);

  const handleFormData = (name, value) => {
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
      handleFormData={handleFormData}
    />
  );
};

export default KycContainer;
