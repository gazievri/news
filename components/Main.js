import { Text, View, Button, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
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
      full: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      id: 1,
      img: 'https://itproger.com/img/courses/1667474359.jpg'
    },
    {
      name: 'Apple',
      anons: 'Apple done all!',
      full: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      id: 2,
      img: 'https://itproger.com/img/courses/1663833928.jpg'
    },
    {
      name: 'Yandex',
      anons: 'Yandex done all!',
      full: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      id: 3,
      img: 'https://itproger.com/img/courses/1663117401.jpg'
    },
  ]);

  return (
    <View style={globalStyles.main}>
      <Text style={[globalStyles.title, styles.header]}>Главная страница</Text>
      <FlatList
        data={news}
        renderItem={({item}) => <TouchableOpacity onPress={() => openArticle(item)} style={styles.item}>
            <Image source={{
              width: '100%',
              height: 200,
              uri: item.img
            }} />
            <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>}
      />

      <Button title="Контакты" onPress={openPage} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  }
})

