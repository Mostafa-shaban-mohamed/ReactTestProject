import React, { Component } from 'react';
import { Button } from './Button';

export class Screen extends Component {
    static displayName = Screen.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>{this.props.onResultScreen ? this.props.onResultScreen : "0"}</h4>
                <h1>{this.props.onMainScreen ? this.props.onMainScreen : "0"}</h1>
            </div>    
        );
        
    }
}