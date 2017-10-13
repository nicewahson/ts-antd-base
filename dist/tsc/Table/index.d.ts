/// <reference types="react" />
import React from 'react';
import 'antd/lib/table/style/index.css';
export interface TableProps {
    dataUrl?: string;
    update?: Function;
    pagination?: object;
    queryParams?: string;
    ref?: Function | string;
    [propName: string]: any;
}
declare class Table37 extends React.Component<TableProps, any> {
    constructor(props: any);
    updateData(): void;
    changePage(pagination: object): void;
    fetch(): void;
    componentWillMount(): void;
    render(): JSX.Element;
}
export default Table37;
