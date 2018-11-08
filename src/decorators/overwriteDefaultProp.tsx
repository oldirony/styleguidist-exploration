import * as React from 'react';

export function overwriteDefaultProps<C>(component: C) {
    const Component: React.ComponentClass = component as any;

    return class NewComponent extends React.PureComponent {
        static defaultProps: any = Component.defaultProps;

        render() {
            return (
                <Component {...mapProps(this.props, NewComponent.defaultProps)}>
                    {this.props.children}
                </Component>
            );
        }
    }
}

function mapProps(props, defaultProps) {
    return {
        ...defaultProps,
        ...props,
    }
}
