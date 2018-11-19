import * as React from 'react'
import styled from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import { lightTheme, darkTheme, withTheme } from '../src/themes'
import { ThemeInterface } from '../src/themes/themeInterface';

interface IState {
    theme: ThemeInterface
}

const themes = [
    lightTheme,
    darkTheme,
];

const ExampleWrapper = withTheme(styled('div')`
  background: ${props => props.theme.backgroundColor};
  padding: 20px;
  transition: background-color 0.2s;
`);

export default class ThemeWrapper extends React.PureComponent<null, IState> {
    state = {
        theme: lightTheme
    };

    handleChange = (e) => {
        this.setState({
            theme: themes.find(theme => theme.name === e.target.value) || lightTheme,
        });
    };

    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <ExampleWrapper>
                    <div style={{'marginBottom': 30}}>
                        <select
                        name="th"
                        id="th"
                        value={this.state.theme.name}
                        onChange={this.handleChange}
                    >
                            {themes.map(theme => (
                                <option
                                    value={theme.name}
                                    key={theme.name}
                                >
                                    {theme.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {this.props.children}
                </ExampleWrapper>
            </ThemeProvider>
        )
    }
}
