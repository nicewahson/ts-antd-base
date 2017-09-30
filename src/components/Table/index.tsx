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
interface TableProps{
    // 数据源地址 传了这个参数意味着加载和翻页时都会从这个加载数据
    dataUrl?:string,
    update?: Function,
    [propName: string]:any
}
class Table3 extends React.Component<TableProps, any>{
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
                return { dataSource: data.list }
            })
        })
    }
    render() {
        console.log('render')
        return (<div className="ant-table-37m">
            <Table {...this.props} {...this.state} />
        </div>)
    }
}

export default decorator(Table3)