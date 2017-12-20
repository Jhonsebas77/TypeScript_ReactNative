/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class App extends Component {
    constructor() {
        super(...arguments);
        this.state = { name: 'Sebastian' };
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.welcome },
                "Welcome to React Native ",
                this.state.name,
                "!")));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
//# sourceMappingURL=app.js.map