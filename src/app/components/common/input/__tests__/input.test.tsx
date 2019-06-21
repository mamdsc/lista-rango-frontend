
import * as React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../../theme/default";
import { mount } from '../../../../../jest/setup';
import { Input } from '../input';

describe('<Input /> should...', () => {

    const marginTop = '16px';
    const marginBottom = '24px';
    const placeHolder = 'Teste input';
    const width = '791px';

    const wrapper = mount(
        <ThemeProvider theme={theme}>
        <Input
            aplicarFiltro={() => {}}
            marginTop={marginTop}
            marginBottom={marginBottom}
            placeHolder={placeHolder}
            width={width}
        />
        </ThemeProvider>
    );

    it('render the margins', () => {
      expect(wrapper.find('Input').prop('marginTop')).toBe(marginTop);
      expect(wrapper.find('Input').prop('marginBottom')).toBe(marginBottom);
    });

    it('render the placeholder', () => {
      expect(wrapper.find('Input').prop('placeHolder')).toBe(placeHolder);
    });

    it('render the width', () => {
      expect(wrapper.find('Input').prop('width')).toBe(width);
    });

});