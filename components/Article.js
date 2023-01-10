import { Text, View } from 'react-native';
import { globalStyles } from '../styles/styles';

export const Article = ({ route }) => {


  return (
    <View style={globalStyles.main}>
      <Text style={globalStyles.title}>{route.params.name}</Text>
      <Text>{route.params.anons}</Text>
      <Text>{route.params.full}</Text>
    </View>
  );
}