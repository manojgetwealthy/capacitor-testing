/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import getDeviceInfo from "./getDeviceInfo";

const checkIsNativeDevice = async () => {
  const deviceInfo = await getDeviceInfo();
  const deviceOS = deviceInfo.operatingSystem;
  const isNativeDevice = (deviceOS === "android" || deviceOS === "ios") ? true : false;
  return isNativeDevice;
};

export default checkIsNativeDevice;
