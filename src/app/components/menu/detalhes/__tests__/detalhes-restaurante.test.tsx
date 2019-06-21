
import * as React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from '../../../../../theme/default';
import { mount } from '../../../../../jest/setup';
import { DetalhesRestaurante } from '../detalhes-restaurante';
import { BrowserRouter as Router } from 'react-router-dom';
import { IRestaurante, IHours } from '../../../../../meta-data/interfaces';

describe('<DetalhesRestaurante /> should...', () => {

    const horas: IHours[] = [{
        from: '12:00',
        to: '14:00',
        days: [1, 2, 3]
    }];

    const restaurante: IRestaurante = {
        id: 1,
        name: 'Teste Nome',
        address: 'Rua Teste',
        image: 'teste.img',
        hours: horas,
        abertoAgora: false
    };

    const wrapper = mount(
        <Router>
            <ThemeProvider theme={theme}>
                <DetalhesRestaurante
                    restaurante={restaurante}
                    ultimoDiaDaSemana={jest.fn()}
                    primeiroDiaDaSemana={jest.fn()}
                />
            </ThemeProvider>
        </Router>
    );

    it('render name', () => {
        expect(wrapper.find('h1').prop('children')).toBe(restaurante.name);
    });

    it('render image e alt image', () => {
        expect(wrapper.find('img').prop('src')).toBe(restaurante.image);
        expect(wrapper.find('img').prop('alt')).toBe(restaurante.name);
    });

    it('render hours', () => {
        horas.map(h => {
            expect(wrapper.find('#hours').prop('children')).toContain(h.from);
        })
    });

});