import * as React from 'react'
import { Table } from 'antd'

const decorator = (WrapComponent: any) => {
    class Main extends React.Component<any, any>{
        render() {
            return <WrapComponent {...this.props} />
        }
    }
    return Main
}

class Table3 extends React.Component<any, any>{
    render() {
        return (<div className="ant-table-37m">
            <Table {...this.props} />
        </div>)
    }
}

export default decorator(Table3)