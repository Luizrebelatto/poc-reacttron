import AsyncStorage from "@react-native-async-storage/async-storage";

function isJson(value: string) {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}

export async function getItemFromStorage(key: string){
    try {
        const value = await AsyncStorage.getItem(key)

        if (!value) {
            return null
        }

        if(isJson(value)){
            return JSON.parse(value)
        }
        
        return value;
    } catch(error) {
        console.tron.log(`getStorage Error: ${error}`)
        return null;
    }
}

type StorageValue = string | number | boolean | object | null;

export async function setItemToStorage(key: string, value: StorageValue){
    try {
        const parsedValue = typeof value === "string" ? value : JSON.stringify(value);

        await AsyncStorage.setItem(key, parsedValue);
    } catch(error) {
        console.tron.log(`setItemToStorage Error: ${error}`)
    }
}

export async function saveUserName(name: string) {
  await AsyncStorage.setItem('name', name);

  console.tron.log('Name Saved', name);
}

export async function getUser(){
    const name = await getItemFromStorage("name")
    console.tron.log('Name read:', name);

    return name;
}