import React from 'react';

export function WelcomeFunc(props) {
    console.log(props);
    return <h1>Hello, {props.name}</h1>;
}