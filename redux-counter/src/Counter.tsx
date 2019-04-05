import * as React from 'react';

export interface CounterInterface {
}

class Counter extends React.Component {
    
    constructor(props: any) {
        super(props);
    }

    render() { 
        return (  
            <>
                <button>incremente</button>
                <h1>count : {this.props.cpt}
                </h1>
                <button>decremente</button>

            </>
        );
    }
}

export default Counter;

 