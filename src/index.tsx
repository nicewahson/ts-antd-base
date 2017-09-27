import * as React from "react";
import * as ReactDOM from "react-dom";

import Table from './components/Table/test'


const decorator = (WrapComponent: any) => {
    class Main extends React.Component<any, any>{
        state = {
            hasError: false
        }
        componentDidCatch(){
            this.setState({hasError: true})
        }
        render(){
            if(this.state.hasError)
                return <div>
                    something wengt wrong
                </div>
            else
                return <WrapComponent {...this.props}/>
        }
    }
    return Main
}

const RealComponent = decorator(Table)
ReactDOM.render(
    <RealComponent />,
    document.getElementById("example")
);
