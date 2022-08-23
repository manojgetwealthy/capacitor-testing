/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import Kyc from "./components"

import styled from "styled-components";
import {IonApp} from "@ionic/react";

const App = () => {
  return (
    <ComponentsWrapper>
      <IonApp>
        <Kyc />
      </IonApp>
    </ComponentsWrapper>
  );
};

const ComponentsWrapper = styled.div`
  .custom-ion-page {
    overflow: auto;
  }
`;

export default App;
