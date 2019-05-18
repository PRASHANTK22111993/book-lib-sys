import React from 'react';

/**
 * Image Element Used to Show the Image
 * @param {*} props - Object
 */
const Image = (props) => {
    const { children, alt = '', ...rest } = props;
    return (<img alt={alt} {...rest}>
        {children}
    </img>);
};

// Default Export
export default Image;
