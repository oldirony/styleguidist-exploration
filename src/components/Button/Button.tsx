import * as React from 'react';
import styled from 'react-emotion';
import { withTheme } from '../../themes';
import './button.css'

type ButtonType = "primary" | "secondary";

/**
 * Props and methods
 */
interface ButtonProps {
    /** The style of the button. */
    type?: ButtonType,
    /** Whether the button can be used or not. */
    disabled?: boolean,
    /** What the button contains. */
    children?: any,
}

const ButtonComponent = withTheme(styled('button')<ButtonProps>`
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    color: ${props => props.type === 'primary' ? props.theme.foregroundColor : props.theme.backgroundColor };
    border-style: solid;
    border-width: 2px;
    border-color: ${props => props.type === 'primary' ? props.theme.foregroundColor : props.theme.backgroundColor };
    background: ${props => props.type === 'primary' ? props.theme.backgroundColor : props.theme.foregroundColor};
    
    &[disabled] {
        opacity: 0.3;
        cursor: not-allowed;
    }
`);

/**
 * Description of the button component here
 */
export const Button: React.SFC<ButtonProps> = (props: ButtonProps) => {
    const { type, disabled, children } = props;

    return (
        <ButtonComponent
            disabled={disabled}
            type={type}
        >
            {children}
        </ButtonComponent>
    )
};

Button.defaultProps = {
    type: "primary",
    disabled: false,
};

