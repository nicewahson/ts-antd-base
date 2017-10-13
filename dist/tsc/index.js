import React from "react";
import ReactDOM from "react-dom";
import es6p from 'es6-promise';
es6p.polyfill();
//
import { Table } from 'qqaatable';
// export {default as Table} from './Table/test'
// // const decorator = (WrapComponent: any) => {
// //     class Main extends React.Component<any, any>{
// //         state = {
// //             hasError: false
// //         }
// //         componentDidCatch(){
// //             this.setState({hasError: true})
// //         }
// //         render(){
// //             if(this.state.hasError)
// //                 return <div>
// //                     something wengt wrong
// //                 </div>
// //             else
// //                 return <WrapComponent {...this.props}/>
// //         }
// //     }
// //     return Main
// // }
// //
// // const RealComponent = decorator(Table)
ReactDOM.render(React.createElement(Table, null), document.getElementById("example"));
