import React, { Fragment } from 'react';
import TextArea from '../Presentation/TextArea';
import Input from '../Presentation/Input';
import Label from '../../Label';

/**
 * Input Group Component
 * @param {*} props - Props Object
 */
const InputGroup = (props) => {
    const { id = '', placeholderText = '', name = '', height = 100,
        type = 'text', labelText = '', value = '', onChange } = props;
    let renderedChild = null
    if (type && type === 'textarea') {
        renderedChild = (<TextArea
            style={{ height: `${height}px` }}
            id={id}
            name={name}
            value={value}
            placeholder={placeholderText}
            onChange={onChange}
        />);
    } else {
        renderedChild = (<Input
            type={type}
            id={id}
            name={name}
            value={value}
            placeholder={placeholderText}
            onChange={onChange}
        />)
    }
    return (<Fragment>
        <div className="col-25">
            <Label
                htmlFor={id}
            >
                {labelText}
            </Label>
        </div>
        <div className="col-75">
            {renderedChild}
        </div>
    </Fragment>
    );
};

// Export Default 
export default InputGroup;