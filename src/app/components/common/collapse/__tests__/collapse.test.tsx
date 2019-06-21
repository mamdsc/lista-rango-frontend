
import * as React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../../theme/default";
import { Collapse } from "../collapse";
import { mount } from '../../../../../jest/setup';

describe('<Collapse /> should...', () => {

    const label = 'test collapse';
    const children = 'Fusce ligula augue, vestibulum id tortor eget';
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Collapse label={label}>
          {children}
        </Collapse>
      </ThemeProvider>
    );
      
    it('simulate click', () => {
      expect(wrapper.find('Collapse').state('open')).toBe(false);
      wrapper.find('button').simulate('click');
      expect(wrapper.find('Collapse').state('open')).toBe(true);
    });

    it('render the label', () => {
      expect(wrapper.find('Collapse').prop('label')).toBe(label);
    });

});