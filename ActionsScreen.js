import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { clearName, setError, setLoading, setName } from "./store/userSlice";
import { getUsers as fetchUsers } from "./service/user";
import { removeUser, getUser, saveUserName } from "./storage";

export function ActionsScreen() {
  const dispatch = useDispatch();

  const { name, loading, error } = useSelector((state) => state.user);

  async function handleSaveName() {
    dispatch(setLoading(true));

    try {
      await saveUserName("Luiz");
      dispatch(setName("Luiz"));
      dispatch(setError(null));
    } catch {
      dispatch(setError("Error to save name"));
    } finally {
      dispatch(setLoading(false));
    }
  }

  async function handleReadName() {
    dispatch(setLoading(true));

    try {
      const savedName = await getUser();

      if (savedName) {
        dispatch(setName(savedName));
      }

      dispatch(setError(null));
    } catch {
      dispatch(setError("Error to read name"));
    } finally {
      dispatch(setLoading(false));
    }
  }

  async function handleRemoveName() {
    await removeUser();
    dispatch(clearName());
  }

  async function handleApiRequest() {
    dispatch(setLoading(true));

    try {
      await fetchUsers();
      dispatch(setError(null));
    } catch {
      dispatch(setError("Erro ao buscar usuários"));
    } finally {
      dispatch(setLoading(false));
    }
  }

  function handleSimulateError() {
    try {
      throw new Error("Erro simulado na POC");
    } catch (error) {
      console.tron.error?.("Erro capturado:", error);
      dispatch(setError("Erro simulado capturado"));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reactotron + Redux Toolkit</Text>

      <Text>Name on redux: {name || "Empty"}</Text>
      <Text>Loading: {loading ? "yes" : "no"}</Text>
      <Text>Error: {error || "empty"}</Text>

      <Button title="Save name AsyncStorage + Redux" onPress={handleSaveName} />
      <Button title="Read AsyncStorage and update Redux" onPress={handleReadName} />
      <Button title="Remove name" onPress={handleRemoveName} />
      <Button title="Request API" onPress={handleApiRequest} />
      <Button title="Simulate Error" onPress={handleSimulateError} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});