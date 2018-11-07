import * as React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { lightTheme } from '../src/themes'

export default class ThemeWrapper extends React.PureComponent {
    render() {
        return (
            <ThemeProvider theme={lightTheme}>
                {this.props.children}
            </ThemeProvider>
        )
    }
}
