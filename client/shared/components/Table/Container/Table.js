import React, { Component, Fragment } from 'react';
import { isObjectType, isArrayType } from '../../../utils';

/**
 * Table Body Component
 * @param {*} props 
 */
const TableBody = (props) => {
    const { children } = props;
    return (<tbody>
        {children}
    </tbody>);
};

/**
 * Table Component
 * @param {*} props 
 */
const TableComponent = (props) => {
    const { children } = props;
    return (<table className="main-table">
        <TableBody>
            {children}
        </TableBody>
    </table>);
};

/**
 * Table Row Component
 * @param {*} props 
 */
const TableRow = (props) => {
    const { children, ...rest } = props;
    return (<tr className="table-row" {...rest}>
        {children}
    </tr>);
};

/**
 * Table Head Component
 * @param {*} props 
 */
const TableHead = (props) => {
    const { children } = props;
    return (<th className="table-data table-head">
        {children}
    </th>);
};

/**
 * Table Data Component
 * @param {*} props 
 */
const TableData = (props) => {
    const { children } = props;
    return (<td className="table-data">
        {children}
    </td>);
};

/**
 * Component Used to Create the Table Heading Component
 * @param {*} props 
 */
const TableHeading = (props) => {
    const { headerConfig = {} } = props;
    if (isObjectType(headerConfig)) {
        const tableHeadings = Object.keys(headerConfig)
            .map((headerKey, index) => {
                return (<TableHead
                    key={`table-heading~${headerKey}~${index}`}>
                    {headerConfig[headerKey] || ''}
                </TableHead>);
            });
        return (<TableRow>
            {tableHeadings}
        </TableRow>);
    }
    return null;
};

/**
 * Componnet Used to Create the Table Body
 * @param {*} props - Table Body
 */
const TableBodyComponent = (props) => {
    const { headerConfig = {}, tableData = [], onRowClickListner } = props;
    if (isArrayType(tableData)) {
        const dataKeys = Object.keys(headerConfig) || [];
        const tdData = tableData.map((trData, rowIndex) => {
            const rowClickWrapper = (e) => onRowClickListner && onRowClickListner(e, trData, rowIndex);
            return <TableRow
                onClick={rowClickWrapper}
                key={`table-row-data~${rowIndex}`}>
                {dataKeys.map((headingKey, headingIndex) => {
                    return <TableData
                        key={`table-row-data-item~${headingIndex}`}>
                        {trData[headingKey]}
                    </TableData>
                })}
            </TableRow>
        });
        return (<Fragment>
            {tdData}
        </Fragment>);
    }
    return null;
};

/**
 * Table Component Used to Create the Table Structure
 */
class Table extends Component {
    render() {
        const { headerConfig = {}, tableData = [], onRowClickListner } = this.props
        return (<TableComponent>
            <TableHeading
                headerConfig={headerConfig}
            />
            <TableBodyComponent
                headerConfig={headerConfig}
                tableData={tableData}
                onRowClickListner={onRowClickListner}
            />
        </TableComponent>
        );
    }
}

// Export Default Table Component
export default Table;