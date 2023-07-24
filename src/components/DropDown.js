// ----------Inbuilt components and modules----------
import { useState } from "react";
import { View } from "react-native";

// ----------Custom components and modules----------
import { Picker } from "@react-native-picker/picker";

export default function DropDown({ selectType, reset }) {
  // Initial select state
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View style={{ width: "100%" }}>
      <Picker
        selectedValue={reset ? null : selectedValue}
        style={{
          width: "100%",
          backgroundColor: "skyblue",
          color: "black",
          marginBottom: 10,
        }}
        onValueChange={(itemValue) => {
          selectType(itemValue);
          setSelectedValue(itemValue);
        }}
      >
        <Picker.Item label="Select a Type..." value={null} />
        <Picker.Item label="Past Income" value="Past Income" />
        <Picker.Item label="Future Income" value="Future Income" />
        <Picker.Item label="Past Expense" value="Past Expense" />
        <Picker.Item label="Future Expense" value="Future Expense" />
      </Picker>
    </View>
  );
}
