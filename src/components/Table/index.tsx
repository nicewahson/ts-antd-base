import * as React from 'react'
import { Table } from 'antd'
import { request } from './util'
import PropTypes from 'prop-types'

const decorator = (WrapComponent: any) => {
    class Main extends React.Component<any, any>{
        render() {
            return <WrapComponent {...this.props} />
        }
    }
    return Main
}

class Table3 extends React.Component<any, any>{
    // state = {
    //     dataSource: []
    // }
    constructor(props:any) {
        super(props)
        this.state = {
            dataSource: []
        }
    }

    componentWillMount() {
        request((data: any) => {
            console.log(data)
            this.setState((preState, prop) => {
                console.log(preState, prop)
                return { dataSource: data.list }
            })
        })
    }
    render() {
        return (<div className="ant-table-37m">
            <Table {...this.props} {...this.state} />
        </div>)
    }
}

export default decorator(Table3)