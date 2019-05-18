import React, { Component } from 'react';
import Input from '../../Input';
import Button from '../../Button';
import { isFunction } from '../../../utils';

/**
 * Search Box Component Used to Show The Search Box
 */
class SearchBox extends Component {
    onEnterHandlerEvent = e => {
        const { onEnterHandler } = this.props;
        if (isFunction(onEnterHandler)) {
            onEnterHandler(e);
        }
    }

    keyUpEventListner = e => {
        if (e.which === 13) {
            this.onEnterHandlerEvent(e);
        }
    }

    render() {
        const { placeHolder = '', onChangeHandler, searchValue = '' } = this.props;
        return (
            <div className="search-wrapper">
                <div className="search-box">
                    <Input
                        type="text"
                        className="searchTerm"
                        placeholder={placeHolder}
                        onChange={onChangeHandler}
                        value={searchValue}
                        onKeyUp={this.keyUpEventListner}
                    />
                    <Button
                        onClick={this.onEnterHandlerEvent}
                        type="submit"
                        className="searchButton">
                        <i className="fa fa-search"></i>
                    </Button>
                </div>
            </div>
        );
    }
}

// Export Default
export default SearchBox;