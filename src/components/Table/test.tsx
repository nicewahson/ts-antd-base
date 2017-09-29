import * as React from 'react'
import Table3 from './index'


interface s{
  key: string,
  title: string,
  name: string,
  age: number

}
const dataSource:s[] = [];
let i = 0
while(i<22){
  dataSource.push({
    key: i.toString(),
    title:`title${i}`,
    name: `name${i}`,
    age:i
  })
  i++
}

const columns = [{
  title: '创建时间',
  dataIndex: 'createTime',
  key: 'name',
}, {
  title: '生成码',
  dataIndex: 'code',
  key: 'age',
}, {
  title: '模板名',
  dataIndex: 'formatName',
  key: 'address',
}];


const Table = ()=><Table3 rowKey="code" dataSource={dataSource} columns={columns}/>

export default Table