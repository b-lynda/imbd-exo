import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.nav}>
      <Text styles={styles.title}>Tarzan</Text>
      <Image source={require("./img/imbd-logo.png")} styles={styles.logo} resizeMode='contain' />
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    width: 355,
    height: 8,
    backgroundColor: "#393939",
  },
  logo: {width: 15, height:15,marginTop:25}
});
