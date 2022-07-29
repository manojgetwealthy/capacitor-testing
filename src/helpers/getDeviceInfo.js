/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import {Device} from '@capacitor/device';

const getDeviceInfo = async () => {
  let info = "";
  try {
    info = await Device.getInfo();
  } catch (error) {
    console.log(error);
  } finally {
    return info;
  }
};

export default getDeviceInfo;