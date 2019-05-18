import React, { Component } from 'react';
import { AppConstants } from '../../../app/AppConfig';
import Heading from '../../../shared/components/Heading';
import { ConnectComponent, isFunction } from '../../../shared/utils';
import SearchResultContainer from '../../SearchBook/Container/SearchResultContainer';
import { setSelNavMenuLink } from '../../../shared/appStore/actions/Common/action';

/**
 * View All Container Component
 */
class ViewAllContainer extends Component {

    /**
     * Component Did Mount
     */
    componentDidMount = () => {
        const { setSelNavMenuLink } = this.props;
        if (isFunction(setSelNavMenuLink)) {
            setSelNavMenuLink(AppConstants.NAV_URL.VIEW);
        }
    }

    render() {
        return (<div className='view-all-container'>
            <Heading labelTag="h2">
                Here are list of books available..
            </Heading>
            <SearchResultContainer />
        </div>);
    }
}

/**
 * Map Dispatch to Props
 * @param {*} dispatch - Dispatch API
 */
const mapDispatchToProps = (dispatch) => {
    return {
        setSelNavMenuLink: (data) => {
            dispatch(setSelNavMenuLink(data));
        }
    };
};

// export default 
export default ConnectComponent(ViewAllContainer, null, mapDispatchToProps);
