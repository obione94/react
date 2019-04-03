import React, { Component } from 'react';

export class WelcomeClass extends Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}