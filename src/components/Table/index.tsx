import * as React from 'react'
import { Table } from 'antd'
import { request } from './util'
import PropTypes from 'prop-types'

const DEFAULT_PAGE_SIZE = 10
const DEFAULT_CURRENT = 1

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
    pagination?: object,
    queryParams?: string,
    ref?:Function | string,
    [propName: string]:any
}
class Table3 extends React.Component<TableProps, any>{
    constructor(props:any) {
        super(props)
        this.state = {
            dataSource: [],
            pagination: {
                pageSize: DEFAULT_PAGE_SIZE,
                current: DEFAULT_CURRENT
            }
        }
        this.changePage = this.changePage.bind(this)
        this.fetch = this.fetch.bind(this)
        this.updateData = this.updateData.bind(this)
    }

    updateData():void{ // 更新至第一页
        this.setState(()=>({
            pagination: {...this.state.pagination, current: DEFAULT_CURRENT},
        }), ()=>{
            this.fetch()
        })
    }

    changePage(pagination: object):void{
        this.setState(()=>({
            pagination,
        }), ()=>{
            this.fetch()
        })
    }
    fetch(){
        const {pagination} = this.state
        this.setState(()=>({
            loading: true
        }))
        request(`${this.props.dataUrl}?pageNumber=${pagination.current}&pageSize=${pagination.pageSize}&${this.props.queryParams}`, (data: any) => {
            console.log(data)
            this.setState((preState, prop) => ({
                dataSource: data.list, 
                pagination: Object.assign({}, this.state.pagination, {
                    total: data.totalRow,
                    showTotal: (total:number) => `合计${total}条`
                }),
                loading: false
            }))
        })
    }
    componentWillMount() {
        this.fetch()
    }
    render() {
        console.log('render')
        return (<div className="ant-table-37m">
            <Table {...this.props} {...this.state} onChange={this.changePage}/>
        </div>)
    }
}

export default Table3