import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Form from '../../../shared/components/Form';
import { RowWrapper } from '../Presentation/AddBookItems';
import { InputGroup } from '../../../shared/components/Input';
import { ConnectComponent, isFunction } from '../../../shared/utils';
import { setSelNavMenuLink } from '../../../shared/appStore/actions/Common/action';
import { AppConstants } from '../../../app/AppConfig';
import Button from '../../../shared/components/Button';
import { addOrEditBookData, clearSelectedBookData } from '../../../shared/appStore/actions/BookLibrary/bookLibraryAction';
import { libUiAppDataSelectedbookSel } from '../../../shared/appStore/selectors/BookLibrary/bookLibrarySelector';

/**
 * Add Book Container Used to Add the Book
 */
class AddBookContainer extends Component {

    state = ((this.props && this.props.bookObj && { ...this.props.bookObj }) || {});

    /**
    * Component Did Mount
    */
    componentDidMount = () => {
        const { setSelNavMenuLink } = this.props;
        if (isFunction(setSelNavMenuLink)) {
            setSelNavMenuLink(AppConstants.NAV_URL.ADD);
        }
    }

    /**
     * On Change Handler
     */
    onChangeHandler = (_, value, { name }) => {
        this.setState({ [name]: value });
    }

    /**
     * On Submit Button clicked
     */
    submitButtonClick = (e) => {
        e.preventDefault();
        const { addOrEditBookData } = this.props;
        if (isFunction(addOrEditBookData)) {
            addOrEditBookData(this.state);
        }
    }

    /**
     * Used to clear the Selected Data
     */
    componentWillUnmount = () => {
        const { clearSelectedBookData } = this.props;
        if (isFunction(clearSelectedBookData)) {
            clearSelectedBookData();
        }
    }

    render() {
        const { state = {} } = this;
        return (<div className="add-book-container">
            <Form>
                <RowWrapper>
                    <InputGroup
                        type="text"
                        id="bookName"
                        name="bookName"
                        labelText="Book Name"
                        placeholderText="Enter book name..."
                        onChange={this.onChangeHandler}
                        value={state.bookName || ''}
                    />
                </RowWrapper>
                <RowWrapper>
                    <InputGroup
                        type="text"
                        id="bookAuthor"
                        name="bookAuthor"
                        labelText="Book Author"
                        placeholderText="Enter Author Name..."
                        onChange={this.onChangeHandler}
                        value={state.bookAuthor || ''}
                    />
                </RowWrapper>
                <RowWrapper>
                    <InputGroup
                        type="text"
                        id="bookPublisher"
                        name="bookPublisher"
                        labelText="Book Publisher"
                        placeholderText="Enter Publication name..."
                        onChange={this.onChangeHandler}
                        value={state.bookPublisher || ''}
                    />
                </RowWrapper>
                <RowWrapper>
                    <InputGroup
                        type="text"
                        id="bookCount"
                        name="bookCount"
                        labelText="Book Count"
                        placeholderText="Enter Number of Books..."
                        onChange={this.onChangeHandler}
                        value={state.bookCount || ''}
                    />
                </RowWrapper>
                <RowWrapper>
                    <InputGroup
                        height={100}
                        type="textarea"
                        id="bookDescription"
                        name="bookDescription"
                        labelText="Book Description"
                        placeholderText="Write Something About the book..."
                        value={state.bookDescription || ''}
                        onChange={this.onChangeHandler}
                    />
                </RowWrapper>
                <RowWrapper>
                    <Button
                        className="cta-btn"
                        onClick={this.submitButtonClick}
                    >
                        Submit
                    </Button>
                </RowWrapper>
            </Form>
        </div>);
    }
}

/**
 * Map State to Props
 * @param {*} state - Redux Store
 */
const mapStateToProps = (state) => {
    return {
        bookObj: libUiAppDataSelectedbookSel(state)
    };
};

/**
 * Map Dispatch to Props
 * @param {*} dispatch - Dispatch API
 */
const mapDispatchToProps = (dispatch, props) => {
    return {
        setSelNavMenuLink: (data) => {
            dispatch(setSelNavMenuLink(data));
        },
        addOrEditBookData: (data) => {
            dispatch(addOrEditBookData(data, props));
        },
        clearSelectedBookData: () => {
            dispatch(clearSelectedBookData());
        }
    };
};

// Export default
export default withRouter(ConnectComponent(AddBookContainer, mapStateToProps, mapDispatchToProps));

