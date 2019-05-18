import React, { Component } from 'react';
import { ConnectComponent, isFunction } from '../../shared/utils';
import Heading from '../../shared/components/Heading';
import SearchBookContainer from '../SearchBook/Container/SearchBookContainer';
import { getLibraryDataAction } from '../../shared/appStore/actions/BookLibrary/bookLibraryAction';
import Loader from '../../shared/components/Loader';
import { getIsLoadingSel } from '../../shared/appStore/selectors/Common/CommonSelector';
import { checkBooksHasBeenFetched } from '../../shared/appStore/selectors/BookLibrary/bookLibrarySelector';
import { AppConstants } from '../../app/AppConfig';
import { setSelNavMenuLink } from '../../shared/appStore/actions/Common/action';

/**
 * Home Container Component
 */
class HomeContainer extends Component {

    /**
     * Component Did Mount
     */
    componentDidMount = () => {
        const { getLibraryData, fetchBookFlag = false, setSelNavMenuLink } = this.props;
        if (!fetchBookFlag && isFunction(getLibraryData)) {
            getLibraryData();
        }
        if (isFunction(setSelNavMenuLink)) {
            setSelNavMenuLink(AppConstants.NAV_URL.HOME);
        }
    }

    render() {
        const { isLoading = false } = this.props;
        return (<div className='homepage-container'>
            <Loader loadingText={"Loading data..."} isLoadingFlag={isLoading} />
            <Heading labelTag="h2" className="homepage-heading">
                Welcome to the Online Book library !!!
            </Heading>
            <SearchBookContainer
                actAsChildContainer
                showHeading
                headingText={'Would you like to search some books ??'}
            />
        </div>);
    }
}

/**
 * Map State to Props
 * @param {*} state - Redux Store
 */
const mapStateToProps = (state) => {
    return {
        isLoading: getIsLoadingSel(state),
        fetchBookFlag: checkBooksHasBeenFetched(state)
    };
};

/**
 * Map Dispatch to Props
 * @param {*} dispatch - Dispatch API
 */
const mapDispatchToProps = (dispatch) => {
    return {
        getLibraryData: () => {
            dispatch(getLibraryDataAction());
        },
        setSelNavMenuLink: (data) => {
            dispatch(setSelNavMenuLink(data));
        }
    };
};

// export default 
export default ConnectComponent(HomeContainer, mapStateToProps, mapDispatchToProps);