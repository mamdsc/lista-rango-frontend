
import * as React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../../theme/default";
import { mount } from '../../../../../jest/setup';
import { Error } from '../error';

describe('<Error /> should...', () => {
    const mensagemErro = 'test error';
    const wrapper = mount(
        <ThemeProvider theme={theme}>
        <Error msg={mensagemErro}/>
        </ThemeProvider>
    );

    it('render the message', () => {
      expect(wrapper.find('Error').prop('msg')).toBe(mensagemErro);
    });

});