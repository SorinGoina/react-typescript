import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./components/Hello";

class Main extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    };

    render() {
        return(
            // <div><h1>Hello World!!!</h1></div>
            <Hello/>
        );
    };
}

ReactDOM.render(<Main/>, document.getElementById("main"));