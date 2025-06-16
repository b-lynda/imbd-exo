import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.nav}>
      <Image source={require("./img/imbd-logo.png")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    width: 355,
    height: 8,
    backgroundColor: "#393939",
  }
});
