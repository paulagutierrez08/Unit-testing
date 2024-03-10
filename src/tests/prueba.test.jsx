import { render, screen } from '@testing-library/react'
import Prueba from '../molecules/prueba'

test("render prueba without problems", ()=>{
    render (<Prueba>Hello, World!</Prueba>);

    const text=screen.getByText('Hello, World!');
    expect(text).toBeInTheDocument();
})

