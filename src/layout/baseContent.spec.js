import React from 'react';
import ReactDOM from 'react-dom';
import BaseContent from './baseContent';
import { MemoryRouter } from 'react-router-dom';

describe('Main app component', function(){
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MemoryRouter>
                <BaseContent />
            </MemoryRouter>,
        div);
        ReactDOM.unmountComponentAtNode(div);
      });
});
