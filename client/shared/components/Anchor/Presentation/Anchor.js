import React from 'react';

/**
 * Anchor Element Used to display Anchor
 * @param {*} props - Object
 */
const Anchor = (props) => {
    const { children, ...rest } = props;
    return (<a {...rest}>
        {children}
    </a>);
};

// Default Export
export default Anchor;
