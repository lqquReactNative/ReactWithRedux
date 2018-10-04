import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AppRegistry, View, Text, Button,Alert} from 'react-native';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement();
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000);
    }

    render() {
        const {value, onIncrement, onDecrement} = this.props;
        return (
            <View>
                <Text>Clicked {value} times</Text>
                <Button title=" + " onPress={onIncrement}/>
                <Button title=" - " onPress={onDecrement}/>
                <Button title="Increment if odd" onPress={this.incrementIfOdd}/>
                <Button title="Increment async" onPress={this.incrementAsync}/>
            </View>
        )

    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
};

AppRegistry.registerComponent("react-with-redux", () => Counter);
