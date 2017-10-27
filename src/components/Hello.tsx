import * as React from "react";

export default class Hello extends React.Component<any, any>{
    constructor(props: any){
        super(props)
    }

    render() {
        return (
            <div style={{backgroundColor: 'Green'}}>
                <h1>Hello React World!!!!</h1>
            </div>
            );
    }
}