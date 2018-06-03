import * as React from 'react';
require('./hello.scss');

export interface HelloProps {
    compiler: string;
    framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <h1 className="hello-react">
                Hello from {this.props.compiler} and {this.props.framework}!
            </h1>
        );
    }
}
