import { Constants } from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.0.10:9000/api",
  },
  staging: {
    apiUrl: "http://192.168.0.20:9000/api",
  },
  production: {
    apiUrl: "http://192.168.0.30:9000/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.production;
};

export default getCurrentSettings;
