import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/styles';
import { useState } from 'react';

export const Main = ({ navigation }) => {
  const openPage = () => {
    navigation.navigate('Contacts');
  };

  const openArticle = (item) => {
    navigation.navigate('Article', item);
  };

  const [news, setNews] = useState([
    {
      name: 'Google',
      anons: 'Google done all!',
      full: 'Google sdflkdjs sldkfjl sdlkfjlsf lskdjfls slkdfj',
    },
    {
      name: 'Apple',
      anons: 'Apple done all!',
      full: 'Apple sdflkdjs sldkfjl sdlkfjlsf lskdjfls slkdfj',
    },
    {
      name: 'Yandex',
      anons: 'Yandex done all!',
      full: 'Yandex sdflkdjs sldkfjl sdlkfjlsf lskdjfls slkdfj',
    },
  ]);

  return (
    <View style={globalStyles.main}>
      <Text style={globalStyles.title}>Главная страница</Text>
      <FlatList
        data={news}
        renderItem={({item}) => <TouchableOpacity onPress={() => openArticle(item)}>
            <Text>{item.name}</Text>
        </TouchableOpacity>}
      />

      <Button title="Контакты" onPress={openPage} />
    </View>
  );
};
