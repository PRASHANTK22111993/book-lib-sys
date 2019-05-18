import React, { Component } from 'react';
import Image from '../../Image';
import LoaderImage from '../../../staticAssets/LoaderImage.svg';

/**
 * Loader Component Used to Display the Loading Image
 */
class Loader extends Component {
    render() {
        const { loadingText = '', isLoadingFlag = false } = this.props;
        let renderElement = null;
        if (isLoadingFlag) {
            renderElement = (
                <div className="loader-component">
                    <div className="loader">
                        <div className="loader-img">
                            <Image src={LoaderImage} />
                        </div>
                        {(loadingText && <div className="loader-text">{loadingText}</div>) || null}
                    </div>
                </div>);
        }
        return (<div>{renderElement}</div>);
    }
}

// Default Export of the Loader Component
export default Loader;