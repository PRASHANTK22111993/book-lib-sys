import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Table from '../../../shared/components/Table';
import { ConnectComponent, isArrayType, isFunction } from '../../../shared/utils';
import { getTableBooksListSel } from '../../../shared/appStore/selectors/BookLibrary/bookLibrarySelector';
import { setSelectedBookData } from '../../../shared/appStore/actions/BookLibrary/bookLibraryAction';

/**
 * Search Result Container Used to Display the Serach Result
 */
class SearchResultContainer extends Component {
    constructor(props) {
        super(props);
        this.tableHeader = {
            name: 'Name',
            author: 'Author',
            publication: 'Publication'
        }
    }

    /**
     * Used to Get the Row Click Listner
     */
    onRowClickListner = (_, { dataObj }) => {
        const { setSelectedBookData } = this.props;
        if (isFunction(setSelectedBookData)) {
            setSelectedBookData(dataObj);
        }
    }

    render() {
        const { booksTableData = [] } = this.props;
        if (isArrayType(booksTableData)) {
            return (<Table
                headerConfig={this.tableHeader}
                tableData={booksTableData}
                onRowClickListner={this.onRowClickListner}
            />);
        }
        return null;
    }
}

/**
 * Map State to Props
 * @param {*} state - Redux Store
 */
const mapStateToProps = (state) => {
    return {
        booksTableData: getTableBooksListSel(state)
    };
};

/**
 * Map Dispatch to Props
 * @param {*} dispatch - Dispatch API
 */
const mapDispatchToProps = (dispatch, props) => {
    return {
        setSelectedBookData: (data) => {
            dispatch(setSelectedBookData(data, props));
        }
    };
};

// Export Default
export default withRouter(ConnectComponent(SearchResultContainer, mapStateToProps, mapDispatchToProps));