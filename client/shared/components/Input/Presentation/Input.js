import React from 'react';

/**
 * Input Element Used to Show the Input
 * @param {*} props - Object
 */
const Input = (props) => {
    const { onChange, ...rest } = props;
    const onChangeWrapper = (e) => props && props.onChange(e, e.target.value, rest);
    return (<input onChange={onChangeWrapper} {...rest} />);
};

// Default Export
export default Input;
