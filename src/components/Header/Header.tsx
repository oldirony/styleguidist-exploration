import * as React from 'react';
import styled from 'react-emotion';

interface HeaderLinkProps {
    href: string;
}

interface HeaderProps {
    /** The name of the website, appearing in the main link */
    siteName: string;
    /** Url of the homepage, appearing as href of the main link */
    homepageLink: string;
}

const HeaderLink = styled('a')<HeaderLinkProps>`
    color: tomato;
    display: inline-block;
    padding-top: 10px;
    padding-bottom: 10px;
    text-decoration: none;
    font-family: Roboto, sans-serif;
`;

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

    render() {
        const { homepageLink, siteName } = this.props;

        return (
            <HeaderComponent>
                <HeaderLink href={homepageLink}>
                    {siteName}
                </HeaderLink>
                {this.props.children}
            </HeaderComponent>
        )
    }
}
