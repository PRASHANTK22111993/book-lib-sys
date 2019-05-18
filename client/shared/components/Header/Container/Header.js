import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ConnectComponent } from '../../../utils';
import Anchor from '../../Anchor';
import Image from '../../Image';
import { getSelectedNavMenu } from '../../../appStore/selectors/Common/CommonSelector';

class Header extends Component {

    getHeaderRightItems = () => {
        const { options = [], selectedPath = '' } = this.props;
        return (<div className='header-right'>
            {options.map((menuOption, index) => {
                const { display = '', link = '' } = menuOption || {};
                return <Link
                    key={`header-right-item~${index}`}
                    to={link}
                    className={(selectedPath === link) ? 'active' : ''}>
                    {display}
                </Link>
            })}
        </div>);
    }

    render() {
        const { appName = '', appIcon = '', appIconAltText = '' } = this.props;
        const hdRightItems = this.getHeaderRightItems();
        return (
            <div className='header'>
                <Anchor href='/' className='header-logo'>
                    <span>
                        <Image
                            src={appIcon}
                            alt={appIconAltText}
                        />
                    </span>
                    {appName}
                </Anchor>
                {hdRightItems}
            </div>
        )
    }
}

/**
 * Map State to Props
 * @param {*} state - Redux Store
 */
const mapStateToProps = (state) => {
    return {
        selectedPath: getSelectedNavMenu(state)
    };
};


// Export Default 
export default ConnectComponent(Header, mapStateToProps);