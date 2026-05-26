import Reactotron from "reactotron-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const reactotron = Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: "POC Reactotron",
  })
  .useReactNative({
    asyncStorage: true,
    networking: {
      ignoreUrls: /symbolicate/,
    },
    editor: false,
    errors: {
      veto: () => false,
    },
    overlay: false,
  })
  .connect();

export default reactotron;