import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <h2 className="rightHeader">Hello, My Name is Mostafa Shaaban</h2>
            <div className="mainPara">
                <p>Welcome to my new react test project, built with react library in VS 2019</p>
                <p>I created a simple calculator (+ - / * operations) and increment/decrement counter (decrement only if number is +ve)</p>
                <p>Two simple test projects just to see what I have learned recently about ReactJS</p>
            </div>
            
      </div>
    );
  }
}
