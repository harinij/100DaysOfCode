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
//        <NavigatorIOS
//      style={styles.container}
//        initialRoute={{
//          component: Main 
//        }} />
        <Main />
    );
  }
}

AppRegistry.registerComponent('thegaze', () => thegaze);
