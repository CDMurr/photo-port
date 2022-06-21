import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';
import { isElementType } from '@testing-library/user-event/dist/utils';

afterEach(cleanup);

describe('About component', () => {
    // First test
    it('renders', () => {
        render(<About />);
    });
    
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render about 
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    });
})
