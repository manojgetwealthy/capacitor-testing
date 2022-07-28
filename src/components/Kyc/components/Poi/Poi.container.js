/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import Poi from "./Poi";

const PoiContainer = ({
  formData,
  setFormData,
  updateStep,
  handleImageClick
}) => {
  return (
    <Poi
      updateStep={updateStep}
      handleImageClick={handleImageClick}
    />
  );
};

export default PoiContainer;
