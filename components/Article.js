import { Text, View, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/styles';

export const Article = ({ route }) => {
  return (
    <View style={globalStyles.main}>
      <Image
        source={{
          width: '100%',
          height: 200,
          uri: route.params.img,
        }}
      />
      <Text style={[globalStyles.title, styles.header ]}>{route.params.name}</Text>
      <Text style={styles.full}>{route.params.full}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  full: {
    fontFamily: 'mt-light',
    fontSize: 16,
    marginTop: 20,
    color: '#f55151'
  },
  header: {
    fontSize: 25,
    marginTop: 25
  }
})