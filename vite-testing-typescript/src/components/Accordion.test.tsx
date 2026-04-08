import { beforeEach, describe, expect, test } from 'vitest'  // El describe permite agrupar distintos test
import {render, screen, fireEvent} from '@testing-library/react'
import Accordion from './accordion'

describe('Accordion', () => {
    beforeEach(() => {  // Esta disponible para todos
        render(
            <Accordion title="hola pepe">
                <h3>Contenido</h3>
                <p>Mucho más contenido</p>
            </Accordion>
        );
    });

    // Testing de la comprobación de los mensajes del accordion
    test('Deberia de mostrarse el titulo todo el tiempo', () => {
        expect(screen.getByText('hola pepe')).toBeDefined() // El toBeDefined sirve por si esta colocado o no avisa si esta o no
    })

    test('La información del accordion deberia de estar oculta', () => {
        expect(screen.queryByText(/Contenido/i)).toBeNull() // El va a buscar esperando recibir un null, si encuentra la palabra Contenido lanza un error
    });

    // Testing eventos del boton

    test('Deberia mostrar el contenido, cuando el titulo es clikeado', () => {
        const buttonContenido = screen.getByText(/abierto/i); // la (i) es para que busque sin importar mayuscula o miniscula
        fireEvent.click(buttonContenido) // Detecta los clicks 
        expect(screen.queryByText(/Contenido/i)).not.toBeNull(); // Cuando se presione click, se espera a que el contenido aparezca
    });

    test('Ocultar el contenido, cuando el titulo es clikeado', () => {
        const buttonContenido = screen.getByText(/abierto/i);
        fireEvent.click(buttonContenido); // Abierto
        fireEvent.click(buttonContenido); // Cerrado
        expect(screen.queryByText(/Contenido/i)).toBeNull();
    })
})
 