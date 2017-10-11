import * as React from 'react'
import Table3 from './index'


interface s {
  key: string,
  title: string,
  name: string,
  age: number

}
const dataSource: s[] = [];
let i = 0
while (i < 22) {
  dataSource.push({
    key: i.toString(),
    title: `title${i}`,
    name: `name${i}`,
    age: i
  })
  i++
}

const columns = [{
  title: '创建时间',
  dataIndex: 'createTime',
  key: 'createTime',
}, {
  title: '类目名',
  dataIndex: 'categoryName',
  key: 'categoryName',
}, {
  title: '服务名',
  dataIndex: 'serverName',
  key: 'serverName',
}];



class Table extends React.Component<any,any> {
  private table: any
  constructor(){
    super()
  }
  render() {
    return (<div>
      <a onClick={()=>{this.table.updateData()}}>click</a>
      <Table3 ref = {(refc)=>{this.table = refc}} rowKey="id" dataSource={dataSource} columns={columns}
        dataUrl='http://release-server.dev.sanqimei.com/lifeSpu/listPageLifeSpu' queryParams="state=2" />
    </div>)
  }
}

export default Table