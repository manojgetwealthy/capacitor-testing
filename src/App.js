/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

// Add environment variable for device testing,
// call defineCustomElements() for web devices

import React, {useState, useEffect} from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonImg
} from "@ionic/react";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";

import { Camera, CameraResultType } from '@capacitor/camera';

import {Capacitor} from '@capacitor/core';

import {defineCustomElements} from '@ionic/pwa-elements/loader';


const App = () => {
  const [image, setImage] = useState();
  const isCameraAvailable = Capacitor.isPluginAvailable("Camera");

  useEffect(() => {
    console.log(image);
  }, [image]);

  defineCustomElements(window);

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    let imageUrl = image.webPath;
    setImage(imageUrl);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CardExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags, within an
            ion-cardContent element.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>

          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 activated</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>

        <IonItem>
          <IonButton color="primary" onClick={() => takePicture()}>Take Photo</IonButton>
          {image && (<IonImg src={image} />)}
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default App;
