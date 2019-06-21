
import * as React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from '../../../../../theme/default';
import { mount } from '../../../../../jest/setup';
import { ItemMenu } from '../item-menu';
import { BrowserRouter as Router } from 'react-router-dom';
import { IMenu } from '../../../../../meta-data/interfaces';

describe('<ItemMenu /> should...', () => {

    const item: IMenu = {
        restaurantId: 1,
        group: 'doce',
        image: 'teste.img',
        name: 'teste',
        price: 2,
        sales: []
    };

    const wrapper = mount(
        <Router>
            <ThemeProvider theme={theme}>
                <ItemMenu
                    item={item}
                    closeModal={jest.fn()}
                />
            </ThemeProvider>
        </Router>
    );

    it('render name', () => {
        expect(wrapper.find('h1').prop('children')).toBe(item.name);
    });

    it('render image e alt image', () => {
        expect(wrapper.find('img').prop('src')).toBe(item.image);
        expect(wrapper.find('img').prop('alt')).toBe(item.name);
    });

    it('render price', () => {
        expect(wrapper.find('#price').prop('children')).toBe(item.price && item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    });

});