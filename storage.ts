import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveUserName(name: string) {
  await AsyncStorage.setItem('@poc:userName', name);

  console.tron.log('Nome salvo no AsyncStorage:', name);
}