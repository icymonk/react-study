import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Todo from './pages/Todo'

export default class App extends React.Component {
  state = {
    todoNumber: 5,
  }

  render() {
    return (
      <PaperProvider>
        <View style={styles.container}>
          <Todo style={styles.todo} initialNumber={this.state.todoNumber}/>
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todo: {
    // flex: 1,
  }
});
