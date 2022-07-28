/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

// Add environment variable for device testing,
// call defineCustomElements() for web devices

import React from "react";

import Selfie from "./Selfie";


const SelfieContainer = ({
  formData,
  setFormData,
  updateStep,
  handleImageClick
}) => {
  return (
    <Selfie
      updateStep={updateStep}
      handleImageClick={handleImageClick}
    />
  );
};

export default SelfieContainer;
