import * as React from 'react'
import Select3 from './index'
const Option = Select3.Option

const Select  = (props:any) => (<Select3 defaultValue="1" style={{width: 200}}>
    <Option value="1">1</Option>
</Select3>)

export default Select