import * as React from 'react';
import styled from 'react-emotion';
import { overwriteDefaultProps } from '../../decorators/overwriteDefaultProp'

interface CustomisableInterface {
    /** 🔧   Label description */
    label?: string
}

/**
 * Example component decorated with a `@overwriteDefaultProps` function.
 */

@overwriteDefaultProps
class Customisable extends React.PureComponent<CustomisableInterface>{
    static defaultProps = {
        label: 'Default label'
    };

    render() {
        const { label } = this.props;

        return (
            <div>
                {label}
            </div>
        )
    }
}

export { Customisable };

// console.log(Customisable.defaultProps);
