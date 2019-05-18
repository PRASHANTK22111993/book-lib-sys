import React from 'react';

/**
 * Heading Element Used to display Headings
 * @param {*} props - Object
 */
const Heading = (props) => {
    const { children, labelTag = 'h2', ...rest } = props;
    if (labelTag === 'h1') {
        return (<h1 {...rest}>
            {children}
        </h1>);
    } else if (labelTag === 'h2') {
        return (<h2 {...rest}>
            {children}
        </h2>);
    } else if (labelTag === 'h3') {
        return (<h3 {...rest}>
            {children}
        </h3>);
    } else if (labelTag === 'h4') {
        return (<h4 {...rest}>
            {children}
        </h4>);
    } else if (labelTag === 'h5') {
        return (<h5 {...rest}>
            {children}
        </h5>);
    } else if (labelTag === 'h6') {
        return (<h6 {...rest}>
            {children}
        </h6>);
    }
    return null;
};

// Default Export
export default Heading;
