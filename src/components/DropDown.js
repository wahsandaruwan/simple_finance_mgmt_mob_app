// ----------Inbuilt components and modules----------
import { useState } from "react";
import { View } from "react-native";

// ----------Custom components and modules----------
import { Picker } from "@react-native-picker/picker";

export default function DropDown() {
  // Initial select state
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View style={{ width: "100%" }}>
      <Picker
        selectedValue={selectedValue}
        style={{
          width: "100%",
          backgroundColor: "skyblue",
          color: "black",
          marginBottom: 10,
        }}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Select a Type..." value={null} />
        <Picker.Item label="Past Income" value="pi" />
        <Picker.Item label="Future Income" value="fi" />
        <Picker.Item label="Past Expense" value="pe" />
        <Picker.Item label="Future Expense" value="fe" />
      </Picker>
    </View>
  );
}
