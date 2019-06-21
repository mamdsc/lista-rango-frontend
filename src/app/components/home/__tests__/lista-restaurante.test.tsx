
import * as React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from '../../../../theme/default';
import { mount } from '../../../../jest/setup';
import { ListaRestaurantes } from '../lista-restaurantes';
import { BrowserRouter as Router } from 'react-router-dom';
import { IRestaurante } from '../../../../meta-data/interfaces';

describe('<ListaRestaurantes /> should...', () => {

    const restaurantes: IRestaurante[] = [{
        id: 1,
        name: 'Teste Nome',
        address: 'Rua Teste',
        image: 'teste.img',
        hours: [],
        abertoAgora: false
    }];

    const wrapper = mount(
        <Router>
            <ThemeProvider theme={theme}>
                <ListaRestaurantes restaurantes={restaurantes}/>
            </ThemeProvider>
        </Router>
    );

    it('render name', () => {
        restaurantes.map(r => {
            expect(wrapper.find('#name').prop('children')).toBe(r.name);
        });
    });

    it('render adress', () => {
        restaurantes.map(r => {
            expect(wrapper.find('#address').prop('children')).toBe(r.address);
        });
    });

    it('render image e alt image', () => {
        restaurantes.map(r => {
            expect(wrapper.find('img').prop('src')).toBe(r.image);
            expect(wrapper.find('img').prop('alt')).toBe(r.name);
        });
    });

    it('render hours - fechado', () => {
        expect(wrapper.find('#hours').prop('children')).toBe('Fechado');        
    });


});