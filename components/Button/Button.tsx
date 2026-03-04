import { TouchableOpacity, Text, StyleSheet } from "react-native";

export type ButtonProps = {
  onPress: () => void;
  text: string;
  containerClassName?: string;
};

export const Button = ({ onPress, text, containerClassName }: ButtonProps) => {
  return (
    <TouchableOpacity className={containerClassName} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: "purple",
    alignSelf: "flex-start",
    borderRadius: 8,
  },
  text: { color: "white", fontSize: 16, fontWeight: "bold" },
});
