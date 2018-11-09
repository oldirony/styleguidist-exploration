import React, { PureComponent } from 'react'

interface DynamicComponentProps {
    fragments: any[]
}


export class DynamicComponent extends PureComponent<DynamicComponentProps> {
    static defaultProps = {
        fragments: []
    };

    digestFragment() {
        const children = React.Children.toArray(this.props.children);

        return [
            ...children,
            this.props.fragments,
        ]
    };

    render() {
        return (
            <div>
                {this.digestFragment()}
            </div>
        )
    }
}

export class DynamicComponentStore {
    private fragments: any[] = [];

    public add(compo) {
        this.fragments = [
            ...this.fragments.filter(comp => comp.key !== compo.key),
            compo
        ];
    }

    public remove(key) {
        this.fragments.push();

        this.fragments = this.fragments.filter(comp => comp.key !== key);
    }

    public getFragments() {
        return this.fragments;
    }
}
