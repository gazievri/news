import { Main } from './components/Main';
import { Contacts } from './components/Contacts';
import { Article } from './components/Article';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={
            { 
              title: 'Главная',
              headerStyle: {
                backgroundColor: '#eb5d3d', height: 100
              },
              headerTitleStyle: {
                fontWeight: 'light'
              }
            } 
          }
        />
        <Stack.Screen
          name="Article"
          component={Article}
          options={{ title: 'Статья' }}
        />
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{ title: 'Контакты' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
