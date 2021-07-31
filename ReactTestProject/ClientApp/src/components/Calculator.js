import React, { Component } from 'react';
import { Screen } from './Screen';
import { Button } from './Button';

export class Calculator extends Component{
    static displayName = Calculator.name;
    
    constructor(props) {
        super(props);
        this.state = { mainScreen: "", resultScreen: "", operation: "" };
        this.handleCallback = this.handleCallback.bind(this);
    }

    handleCallback = (childData) => {

        this.setState({ mainScreen: this.state.mainScreen + childData });

        //if data sent from child (button component) is a number
        if (!isNaN(childData)) {
            if (childData === "0" && this.state.mainScreen === "") {
                this.setState({ mainScreen: this.state.mainScreen });
            } else {
                this.setState({ mainScreen: this.state.mainScreen + childData });
            }
            
        }
        else { //if data sent from child (button component) is a symbol
            //if there is already a number in resultScreen variable, we will do the operation on old and new value
            if (this.state.resultScreen && !isNaN(this.state.mainScreen)) {//if there already a number
                if (this.state.operation === "+") {
                    var a = Number(this.state.resultScreen);
                    var b = Number(this.state.mainScreen);
                    var result = a + b;
                }
                else if (this.state.operation === "-") {
                    var a = Number(this.state.resultScreen);
                    var b = Number(this.state.mainScreen);
                    var result = a - b;
                }
                else if (this.state.operation === "x") {
                    var a = Number(this.state.resultScreen);
                    var b = Number(this.state.mainScreen);
                    var result = a * b;
                }
                else if (this.state.operation === "/") {
                    var a = Number(this.state.resultScreen);
                    var b = Number(this.state.mainScreen);
                    var result = a / b;
                }
                this.setState({ resultScreen: isNaN(result) ? "" : result.toString(), mainScreen: "", operation: childData });
            } else {
                this.setState({ resultScreen: isNaN(this.state.mainScreen) ? "" : this.state.mainScreen, mainScreen: "", operation: childData });
            }
            
        }
    }

    render() {
        return (
            <div>
                <Screen onMainScreen={this.state.mainScreen} onResultScreen={this.state.resultScreen} />
                <p>                                                                                      </p>
                <div id="Board">
                    <Button numberOrSymbolValue="0" screenValue={this.handleCallback}/>
                    <Button numberOrSymbolValue="1" screenValue={this.handleCallback}/>
                    <Button numberOrSymbolValue="2" screenValue={this.handleCallback}/>
                    <Button numberOrSymbolValue="3" screenValue={this.handleCallback}/>
                    <Button numberOrSymbolValue="4" screenValue={this.handleCallback}/>
                    <Button numberOrSymbolValue="5" screenValue={this.handleCallback}/>
                    <Button numberOrSymbolValue="6" screenValue={this.handleCallback}/>
                    <Button numberOrSymbolValue="7" screenValue={this.handleCallback}/>
                    <Button numberOrSymbolValue="8" screenValue={this.handleCallback}/>
                    <Button numberOrSymbolValue="9" screenValue={this.handleCallback}/>
                    <Button numberOrSymbolValue="+" screenValue={this.handleCallback}/>
                    <Button numberOrSymbolValue="-" screenValue={this.handleCallback}/>
                    <Button numberOrSymbolValue="x" screenValue={this.handleCallback}/>
                    <Button numberOrSymbolValue="/" screenValue={this.handleCallback}/>
                    <Button numberOrSymbolValue="=" screenValue={this.handleCallback}/>
                </div>
            </div>    
        );
    }
}