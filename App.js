import React, {Component} from 'react';
import {createStore} from "redux";
import {Provider} from "react-redux";
import CounterApp from "./Containers/CounterApp";
import counter from './Reducers/counter';

const store = createStore(counter);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <CounterApp/>
            </Provider>
        )
    }

}
