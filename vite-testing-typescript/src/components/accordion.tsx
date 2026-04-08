import { useState } from "react";
interface infoPagina {  // Contrato definiendo que se espera de recibir
    title: string,
    children: React.ReactNode  // Trae elementos que react ej: h3, children
}

function Accordion(props: infoPagina) { // Forma de acordion
    const [open, setOpen] = useState(false)  // Estado definido para hacer de que siempre se mantenga en estado cerrado el accordion

    return (
        <div>
            <h3>{props.title}</h3>
            <button onClick={() => {
                setOpen(!open)
            }}>
                { open ? 'Cerrar' : 'Abrir' }</button> 
            <div>
                {
                    open && <div>{props.children}</div> // Solo se estara mostrando la información, si es abierto el accordion, por lo general siempre en estado Muestra si esta abierto,  cerrado
                }
            </div>
        </div>
    )
}

export default Accordion;