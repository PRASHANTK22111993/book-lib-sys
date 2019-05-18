import React, { Component } from 'react';
import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';
import AppLogo from '../../shared/staticAssets/book-icon.svg';

/**
 * Main Container Component
 */
class MainContainer extends Component {
    render() {
        const { routesData = [], children } = this.props;
        return (<div className='main-container'>
            <Header
                appName='Book Library'
                appIcon={AppLogo}
                appIconAltText="Book Library"
                options={routesData}
            />
            <main>{children}</main>
            <Footer>
                <div>
                    Copyright &copy; 2019 Book Library System. All rights reserved
                </div>
            </Footer>
        </div>);
    }
}

// export default 
export default MainContainer;