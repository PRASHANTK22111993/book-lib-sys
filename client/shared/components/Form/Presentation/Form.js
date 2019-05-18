import React from 'react';

/**
 * Form Componnet
 * @param {*} props 
 */
const Form = (props) => {
    const { children } = props
    return (<form>
        {children}
    </form>);
};

// Export default
export default Form