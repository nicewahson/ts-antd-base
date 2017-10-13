/// <reference types="react" />
import React from 'react';
export interface s {
    key: string;
    title: string;
    name: string;
    age: number;
}
declare class Table extends React.Component<any, any> {
    private table;
    constructor();
    render(): JSX.Element;
}
export default Table;
