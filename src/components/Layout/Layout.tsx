import React, { PureComponent } from 'react'
import { DynamicComponent, DynamicComponentStore } from '../DynamicComponent/DynamicComponent'
import styled from 'react-emotion';
import {Header} from "../Header/Header";

const FancyDiv = styled('div')`
  & > * {
    display: flex;
    align-items: stretch;
    width: 100%;
  }

  & > * > * {
    flex: 1 1 auto;
    padding: 20px;
  }

  & > * > *:nth-child(2n) {
      background: #fafafa;
  }

  & > * > *:nth-child(2n - 1) {
      background: ivory;
  }
`;

export class Layout extends PureComponent {
    static propTypes = {};

    static Content = new DynamicComponentStore();

    static defaultProps = {};

    render() {
        return (
            <div>
                <Header homepageLink="asd" siteName="My site" />
                <FancyDiv>
                    <DynamicComponent fragments={Layout.Content.getFragments()}>
                        {this.props.children}
                    </DynamicComponent>
                </FancyDiv>
            </div>
        )
    }
}
