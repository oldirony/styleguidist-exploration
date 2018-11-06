import * as React from 'react';
import './button.css'

type ButtonType = "primary" | "secondary";

/**
 * Props and methods
 */
interface ButtonProps {
    /** Type asd */
    type?: ButtonType,
    /** Type asd */
    disabled?: boolean,
    /** Type asd */
    children?: any,
}

/**
 * Description of the button component here
 * @param props
 * @constructor
 */
export const Button: React.SFC<ButtonProps> = (props: ButtonProps) => {
    const { type, disabled, children } = props;

    return (
        <button
            disabled={disabled}
            className={`Button ${type === "primary" ? "primary": "secondary"}`}
        >
            {children}
        </button>
    )
};

Button.defaultProps = {
    type: "primary"
};

