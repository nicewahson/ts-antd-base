import React from 'react';
import { Table } from 'antd';
import { request } from './util';
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_CURRENT = 1;
const decorator = (WrapComponent) => {
    class Main extends React.Component {
        render() {
            return React.createElement(WrapComponent, Object.assign({}, this.props));
        }
    }
    return Main;
};
class Table3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            pagination: {
                pageSize: DEFAULT_PAGE_SIZE,
                current: DEFAULT_CURRENT
            }
        };
        this.changePage = this.changePage.bind(this);
        this.fetch = this.fetch.bind(this);
        this.updateData = this.updateData.bind(this);
    }
    updateData() {
        this.setState(() => ({
            pagination: Object.assign({}, this.state.pagination, { current: DEFAULT_CURRENT }),
        }), () => {
            this.fetch();
        });
    }
    changePage(pagination) {
        this.setState(() => ({
            pagination,
        }), () => {
            this.fetch();
        });
    }
    fetch() {
        const { pagination } = this.state;
        this.setState(() => ({
            loading: true
        }));
        request(`${this.props.dataUrl}?pageNumber=${pagination.current}&pageSize=${pagination.pageSize}&${this.props.queryParams}`, (data) => {
            console.log(data);
            this.setState((preState, prop) => ({
                dataSource: data.list,
                pagination: Object.assign({}, this.state.pagination, {
                    total: data.totalRow,
                    showTotal: (total) => `合计${total}条`
                }),
                loading: false
            }));
        });
    }
    componentWillMount() {
        this.fetch();
    }
    render() {
        console.log('render');
        return (React.createElement("div", { className: "ant-table-37m" },
            React.createElement(Table, Object.assign({}, this.props, this.state, { onChange: this.changePage }))));
    }
}
export default Table3;
