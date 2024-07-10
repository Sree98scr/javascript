import React, { Component } from 'react';

class MountingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'sree'
        };
        console.log('lifecycle constructor');
    }

    componentDidMount() {
        console.log('lifecycle componentDidMount');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('lifecycle getDerivedStateFromProps');
        return null;
    }

    render() {
        console.log('lifecycle render');
        return (
            <div>lifecycle</div>
        );
    }
}

export default MountingComponent;
