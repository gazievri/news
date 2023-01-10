import { Text, View } from 'react-native';
import { globalStyles } from '../styles/styles';

export const Main = () => {


  return (
    <View style={globalStyles.main}>
      <Text style={globalStyles.title}>Главная страница</Text>
    </View>
  );
}