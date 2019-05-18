import React from 'react';

/**
 * Text Area Element Used to Show the Text Area
 * @param {*} props - Object
 */
const TextArea = (props) => {
    const { onChange, ...rest } = props;
    const onChangeWrapper = (e) => props && props.onChange(e, e.target.value, rest);
    return (<textarea onChange={onChangeWrapper} {...rest} />);
};

// Default Export
export default TextArea;
