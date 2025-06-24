import Area from "../template/Area";

interface GerarNumeroProps {
    numero1: number;
    numero2: number;
}


export default function GerarNumero({ numero1, numero2 }: GerarNumeroProps) {
    const min = Math.min(numero1, numero2);
    const max = Math.max(numero1, numero2);
    return (
        <Area titulo="Gerar Número" cor="blue">
          <div className="flex gap-5">
            <span>Minimo: {min}</span>
            <span>Máximo: {max}</span>
          </div>
        </Area>
        
    )
}