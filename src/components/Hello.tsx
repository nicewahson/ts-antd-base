import * as React from "react";
import { Button, Breadcrumb,Table, Icon  } from 'antd';
import { TableColumnConfig } from 'antd/lib/table/Table';
export interface HelloProps { compiler?: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.

interface IUser {
  key: number;
  name: string;
}

const columns1: TableColumnConfig<IUser>[] = [{
  key: 'name',
  title: 'Name',
  dataIndex: 'name',
}];

const data1: IUser[] = [{
  key: 0,
  name: 'Jack',
}];

class UserTable extends Table<IUser> {}


const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: (text:any) => <a href="#">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text:any, record:any) => (
    <span>
      <a href="#">Action 一 {record.name}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

export class Hello extends React.Component<any, undefined> {
    static defaultProps = {
      compiler: '',
      framework1: ''
    }
    show(key: HelloProps){

    }
    componetDidCatch(){
      console.log('catch')
    }
    use(){
    }
    render() {
        return <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>
            <div>
                <Button type="primary">Primary</Button>
            </div>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
            <Table columns={columns} dataSource={data} />
            <UserTable columns={columns1} dataSource={data1} />
        </div>;
    }
}
