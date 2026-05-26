import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { setItemToStorage, getItemFromStorage } from './storage';

const STORAGE_KEY = 'name';

export default function App() {
  const [text, setText] = useState('');
  const [storedValue, setStoredValue] = useState(null);

  async function handleSave() {
    await setItemToStorage(STORAGE_KEY, text);
    console.tron.log('Saved', text);
  }

  async function handleGet() {
    const value = await getItemFromStorage(STORAGE_KEY);
    setStoredValue(value);
    console.tron.log('Read', value);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um valor"
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Adicionar no AsyncStorage</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleGet}>
        <Text style={styles.buttonText}>Buscar (get)</Text>
      </TouchableOpacity>

      <Text style={styles.result}>
        Valor salvo: {storedValue === null ? '—' : String(storedValue)}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
  },
  button: {
    width: '100%',
    backgroundColor: '#6200ee',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  result: {
    marginTop: 16,
    fontSize: 16,
  },
});
