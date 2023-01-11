import { Text, View, Image, StyleSheet, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/styles';
import { Formik } from 'formik';

export const Form = ({ addArticle }) => {
  return (
    <View>
      <Formik
        initialValues={{ name: '', anons: '', full: '', img: '' }}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
            style={styles.input}
              value={props.values.name}
              placeholder="Введите название"
              onChangeText={props.handleChange('name')}
            />
            <TextInput
            style={styles.input}
              value={props.values.anons}
              multiline
              placeholder="Введите анонс"
              onChangeText={props.handleChange('anons')}
            />
            <TextInput
            style={styles.input}
              value={props.values.full}
              multiline
              placeholder="Введите текст"
              onChangeText={props.handleChange('full')}
            />
            <TextInput
            style={styles.input}
              value={props.values.img}
              placeholder="Ссылка на фото"
              onChangeText={props.handleChange('шьп')}
            />
            <Button title='Добавить' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderBottomColor: 'silver',
        borderRadius: 5,

    }
});
