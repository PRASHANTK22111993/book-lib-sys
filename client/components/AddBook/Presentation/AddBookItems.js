import React from 'react';

/**
 * Row Component Used
 * @param {*} props 
 */
const Row = (props) => {
    const { children } = props;
    return (<div className="row">
        {children}
    </div>);
};

/**
 * Row Warpper Component Used
 * @param {*} props 
 */
export const RowWrapper = (props) => {
    const { children } = props;
    return (<Row>
        {children}
    </Row>);
};