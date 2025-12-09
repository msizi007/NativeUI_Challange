import React from "react";
import { Pressable, StyleSheet } from "react-native";

interface Props {
  bgColor: string;
  icon: React.ReactNode;
}

const IconButton = (props: Props) => {
  return <Pressable style={styles.iconButton}>{props.icon}</Pressable>;
};

export default IconButton;

const styles = StyleSheet.create({
  iconButton: {
    padding: 8,
    borderRadius: 8 * 4,
    backgroundColor: "white",
  },
});
