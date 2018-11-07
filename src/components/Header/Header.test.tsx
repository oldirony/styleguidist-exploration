import * as React from 'react';
import { shallow } from 'enzyme'
import { Header } from './Header'


describe('On normal behaviour', () => {
    it('should work', () => {
        const head = shallow(<Header homepageLink="asd" siteName="asd" />);
        expect(head).toBeTruthy();
    })
});
