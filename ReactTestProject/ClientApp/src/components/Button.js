import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Screen } from './Screen';

export class Button extends Component {
    static displayName = Button.name;

    constructor(props) {
        super(props);
    }

    handleClick(newValue) {

        this.props.screenValue(newValue);

        //if is it a number
        //if (!isNaN(this.props.numberOrSymbolValue)) {
        //    this.props.screenValue(newValue);
        //}
        //if it is symbol
        //else {
        //    if (this.props.numberOrSymbolValue === "+") {
        //        this.props.screenValue("Sum");
        //    }
        //}
    }

    render() {
        const backGStyle = isNaN(this.props.numberOrSymbolValue) ? "background-color: green;" : "background-color: #8b8989;";
        return (
            <button
                className="btn-cal"
                Style={backGStyle}
                value={this.props.numberOrSymbolValue}
                id={this.props.numberOrSymbolValue}
                onClick={() => { this.handleClick(this.props.numberOrSymbolValue) }}
            >{this.props.numberOrSymbolValue}
            </button>
        );
    }
}