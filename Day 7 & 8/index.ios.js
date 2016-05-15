/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var React = require('react-native');
var Main = require('./App/Components/Main');
var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} = React;

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

class thegaze extends React.Component {
  render() {
    return (
        <NavigatorIOS
      style={styles.container}
        initialRoute={{
          title: 'Github NoteTaker',
          component: Main 
        }} />
//      <View style={styles.container}>
//        <Text style={styles.welcome}>
//          Welcome to GitHub Notetaker!
//        </Text>
//        <Text style={styles.instructions}>
//          To get started, edit index.ios.js
//        </Text>
//        <Text style={styles.instructions}>
//          Press Cmd+R to reload,{'\n'}
//          Cmd+D or shake for dev menu
//        </Text>
//      </View>
    );
  }
}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',
//  },
//  welcome: {
//    fontSize: 20,
//    textAlign: 'center',
//    margin: 10,
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5,
//  },
//});

AppRegistry.registerComponent('thegaze', () => thegaze);
