import React, {Component} from 'react';
import {createStore,} from 'redux';
import counter from './reducers/MyCounter';
import Counter from './Components/Counter';
import {AppRegistry, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';

const store = createStore(counter);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Counter
                        value={store.getState()}
                        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
                        onDecrement={() => store.dispatch({type: 'DECREMENT'})}
                    />
                </View>
            </Provider>
        )
    }

}


AppRegistry.registerComponent("react-with-redux", () => App);

export default App;

// store.subscribe(myApp);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
