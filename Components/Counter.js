import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        padding: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    }
});

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.oddIncrease = this.oddIncrease.bind(this);
        this.increaseAsync = this.increaseAsync.bind(this);
    }

    oddIncrease() {
        if (this.props.counter % 2 === 0) {
            this.props.increment();
        }
    }

    increaseAsync() {
        setTimeout(this.props.increment, 1000);
    }

    render() {
        const {counter, increment, decrement} = this.props;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{counter}</Text>
                <Button onPress={increment} title={"Increase"}/>
                <Button onPress={decrement} title={"Decrease"}/>
                <Button onPress={this.oddIncrease} title={"Odd Increase"}/>
                <Button onPress={this.increaseAsync} title={"Increase Async"}/>
            </View>
        );
    }
}
