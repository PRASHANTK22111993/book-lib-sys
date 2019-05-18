import React, { Component } from 'react';
import SearchResultContainer from './SearchResultContainer';
import SearchBox from '../../../shared/components/SearchBox';
import Label from '../../../shared/components/Label';
import { setSelNavMenuLink } from '../../../shared/appStore/actions/Common/action';
import { ConnectComponent, isFunction } from '../../../shared/utils';
import { AppConstants } from '../../../app/AppConfig';
import { setSearchValue } from '../../../shared/appStore/actions/BookLibrary/bookLibraryAction';

/**
 * Search Book Container Component
 */
class SearchBookContainer extends Component {

    state = {
        searchValue: '',
        showSearchResult: false
    }

    componentDidMount = () => {
        const { actAsChildContainer = false, setSelNavMenuLink } = this.props;
        if (!actAsChildContainer && isFunction(setSelNavMenuLink)) {
            setSelNavMenuLink(AppConstants.NAV_URL.SEARCH);
        }
    }

    /**
     * Used to handle the Search Changes
     */
    searchChangeHandler = (_, value) => {
        this.setState({ searchValue: value });
    }

    /**
     * used to clear the data Entered
     */
    componentWillUnmount = () => {
        this.performSearch();
    }

    /**
     * Used for Filtering the Data
     */
    onSearchHandler = () => {
        const { searchValue } = this.state;
        this.performSearch(searchValue);
    }

    /**
     * Perform Search
     */
    performSearch = (searchValue = '') => {
        const { setSearchValue } = this.props;
        if (isFunction(setSearchValue)) {
            setSearchValue(searchValue);
            this.setState({ showSearchResult: (searchValue.length > 0 ? true : false) });
        }
    }

    render() {
        const { searchValue, showSearchResult = false } = this.state;
        const { showHeading = false, headingText = '' } = this.props;
        return (<div className='search-main-container'>
            {showHeading &&
                <Label>
                    {headingText}
                </Label>
            }
            <SearchBox
                searchValue={searchValue}
                onChangeHandler={this.searchChangeHandler}
                onEnterHandler={this.onSearchHandler}
                placeHolder="Search by Name/Author/Publication..."
            />
            {showSearchResult && searchValue.length > 0 && <SearchResultContainer />}
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
        },
        setSearchValue: (data) => {
            dispatch(setSearchValue(data));
        }
    };
};

// export default 
export default ConnectComponent(SearchBookContainer, null, mapDispatchToProps);