import Area from "@/components/template/Area";
import { useState } from "react";

export default function Estado() {
    const [texto, setTexto] = useState('Valor Incial')

    return (
        <div className="p-20">
            <Area titulo="Revisão Estado" cor="blue">
                <input type="text" value={texto} onChange={e => setTexto(e.target.value)} placeholder="Digite algo..." className="input" />
                {/* <button className="pl-5" onClick={() => setTexto('Alterado')}>Alterar</button> */}
                <span className="pl-5">{texto}</span>
            </Area>
        </div>
    )
}