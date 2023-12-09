import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Modal } from "react-native-paper";

export const Flyout = ({ isOpen, onClose }) => {
  return (
    <Modal visible={isOpen} onRequestClose={onClose} animationType="slide">
      <View style={styles.flyoutContainer}>
        {/* Ícone */}
        <Text>Ícone</Text>
        <View>
          <TouchableOpacity onPress={() => console.log("clicou")}>
            <Text>Cadastrar agremiação</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("clicou")}>
            <Text>Agremiações cadastradas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("clicou")}>
            <Text>Cadastrar frevo makers</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("clicou")}>
            <Text>Frevo makers cadastradas</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => console.log("clicou")}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  flyoutContainer: {
    backgroundColor: "white",
    width: "50%",
    height: "100%",
    // marginRight: 0,
    // marginLeft: "auto",
    // marginRight: "auto",
  },
});
