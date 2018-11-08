import * as React from 'react';
import styled from 'react-emotion';
import { withTheme } from "../../themes";

interface HeaderLinkProps {
    href: string;
}

interface HeaderProps {
    /** The name of the website, appearing in the main link */
    siteName: string;
    /** Url of the homepage, appearing as href of the main link */
    homepageLink: string;
    /** @deprecated Use siteName instead */
    text?: string;
}

const HeaderLink = withTheme(styled('a')<HeaderLinkProps>`
    color: ${props => props.theme.accentColor};
    display: inline-block;
    padding-top: 10px;
    padding-bottom: 10px;
    text-decoration: none;
    font-family: Roboto, sans-serif;
`);

const HeaderComponent = styled('header')`
  border-bottom: 1px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #333;
`;

/**
 * A class component, with optional other components as children.
 */
export class Header extends React.PureComponent<HeaderProps> {
    static defaultProps = {};

    /**
     * Use this method to extend
     *
     * @public
     */
    public extend() {
        console.log('extend', this);
    }

    /**
     * Use this method to shrink
     *
     * @public
     */
    public shrink() {
        console.log('shrink', this);
    }

    /**
     * @public
     * @deprecated refer to .extend instead.
     */
    public increase() {
        this.extend();
    }

    render() {
        const { homepageLink, siteName, text } = this.props;

        return (
            <HeaderComponent>
                <HeaderLink href={homepageLink}>
                    {siteName || text}
                </HeaderLink>
                {this.props.children}
            </HeaderComponent>
        )
    }
}
