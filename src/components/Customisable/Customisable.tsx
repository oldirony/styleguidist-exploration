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

const StyledDiv = styled('div')`
  font-family: 'helvetica', sans-serif;
  border: 3px solid tomato;
  display: inline-block;
  padding: 16px;
  background: ivory;
  border-radius: 10px 0 10px 0;
`;

@overwriteDefaultProps
class Customisable extends React.PureComponent<CustomisableInterface>{
    static defaultProps = {
        label: 'Default label'
    };

    render() {
        const { label } = this.props;

        return (
            <StyledDiv>
                {label}
            </StyledDiv>
        )
    }
}

export { Customisable };

// console.log(Customisable.defaultProps);
