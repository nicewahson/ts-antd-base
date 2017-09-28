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
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];


const Table = ()=><Table3 dataSource={dataSource} columns={columns}/>

export default Table