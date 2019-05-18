import React from 'react';

/**
 * Button Element Used to Show the Button
 * @param {*} props - Object
 */
const Button = (props) => {
    const { children, ...rest } = props;
    return (<button {...rest}>
        {children}
    </button>);
};

// Default Export
export default Button;
