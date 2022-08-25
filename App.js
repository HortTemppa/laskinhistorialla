import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState(null);

  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  const [history, setHistory] = useState([]);

  const addNumbers = () => {
    setResult(parseInt(firstNumber) + parseInt(secondNumber));
    const historyObject = {
      text: `${firstNumber} + ${secondNumber} = ${
        parseInt(firstNumber) + parseInt(secondNumber)
      }`,
      key: history.length + 1,
    };
    setHistory([...history, historyObject]);
  };

  const subtractNumbers = () => {
    setResult(parseInt(firstNumber) - parseInt(secondNumber));
    const historyObject = {
      text: `${firstNumber} - ${secondNumber} = ${
        parseInt(firstNumber) + parseInt(secondNumber)
      }`,
      key: history.length + 1,
    };
    setHistory([...history, historyObject]);
  };

  const handleFirstChange = (number) => {
    setFirstNumber(number);
  };

  const handleSecondChange = (number) => {
    setSecondNumber(number);
  };
  console.log(history);

  return (
    <View style={styles.container}>
      {result != null ? <Text>The result is {result}</Text> : null}
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={handleFirstChange}
        value={firstNumber}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={handleSecondChange}
        value={secondNumber}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={addNumbers} title="+"></Button>
        <Button onPress={subtractNumbers} title="-"></Button>
      </View>
      <Text>History:</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => {
          return <Text>{item.text}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  input: {
    textAlign: "center",
    height: 40,
    width: 180,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
  },
  buttonContainer: {
    width: 90,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 15,
  },
});
