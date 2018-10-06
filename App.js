import React, {Component} from 'react';
import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import CounterApp from "./Containers/CounterApp";
import * as reducers from './Reducers/counter';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <CounterApp/>
            </Provider>
        )
    }

}
