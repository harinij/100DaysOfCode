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
  Navigator,
  View
} = React;

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

class thegaze extends React.Component {
//  navigatorRenderScene(route, navigator) {
//        _navigator = navigator;
//        switch (route.id) {
//            case 'Main':
//                return (<Main navigator={navigator} route={route}/>);
//        }
//    }
   render() {
//    return (
//        <Navigator
//                style={styles.container}
//                initialRoute={{id: 'Main'}}
//                renderScene={this.navigatorRenderScene.bind(this)}
//        />
//    );
  }
}

//AppRegistry.registerComponent('thegaze', () => thegaze);
AppRegistry.registerComponent('thegaze', () => Main);