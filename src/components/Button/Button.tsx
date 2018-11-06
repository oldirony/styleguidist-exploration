import * as React from 'react';
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

/**
 * Description of the button component here
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
    type: "primary",
    disabled: false,
};

