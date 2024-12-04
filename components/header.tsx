import 'react-native-reanimated';
import { Text, View, Image } from 'react-native';
import { router } from 'expo-router';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Header() {
  return (
    <View style={{ backgroundColor: "white", padding: 5 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between", // Space between elements
          alignItems: "center", // Vertical alignment
        }}
      >
        {/* Logo and Text */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ marginLeft: 15, width: 25, height: 25 }}
            source={require("../assets/images/logo.png")}
          />
          <Text
            style={{
              marginLeft: 10,
              fontWeight: "700",
            }}
          >
            Scribblr
          </Text>
        </View>

        {/* Icons */}
        <View style={{ flexDirection: "row", gap: 15, marginRight: 15 }}>
          <Octicons name="bell" size={20} color="black" />
          <FontAwesome5 name="bookmark" size={20} color="black" />
        </View>
      </View>
    </View>
  );
}
