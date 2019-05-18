import React from 'react';

/**
 * Footer Component
 * @param {*} props - Object
 */
const Footer = (props) => {
    const { children } = props
    return (
        <div className='footer-main'>
            <div className='footer-content'>
                {children}
            </div>
        </div>
    );
};

// Export Default
export default Footer;
