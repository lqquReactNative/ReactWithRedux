import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as counterActions from '../Actions/counterActions'
import {connect} from "react-redux";
import Counter from "../Components/Counter";

class CounterApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;
        return (
            <Counter
                counter={state}
                {...actions} />
        );
    }
}

export default connect(state => ({
        state: state,
    }),
    (dispatch) => ({
        actions: bindActionCreators(counterActions, dispatch)
    })
)(CounterApp);
