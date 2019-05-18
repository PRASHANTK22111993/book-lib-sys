import React from 'react';

/**
 * Label Element Used to Show the Label
 * @param {*} props - Object
 */
const Label = (props) => {
    const { children, ...rest } = props;
    return (<label {...rest}>
        {children}
    </label>);
};

// Default Export
export default Label;
