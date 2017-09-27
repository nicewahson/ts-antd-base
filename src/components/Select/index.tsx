import * as React from 'react'
import { Select } from 'antd'
const Option1 = Select.Option

interface Outprops{
    children?:any,
    [propName: string]:any
}

const decorator = (WrapComponent: any) => {
    class Main extends React.Component<Outprops, any>{

        static Option = Option1

        render() {
            return <WrapComponent {...this.props} />
        }
    }
    return Main
}

class Select3 extends React.Component<any, any>{
    
    componentWillMount(){
        console.log(!React.Children.count(this.props.children))
    }
    render() {
        const {children, ...rest} = this.props
        return <div>
            <Select {...rest}>
                {
                    children
                }
            </Select>
        </div>
    }
}

export default decorator(Select3)