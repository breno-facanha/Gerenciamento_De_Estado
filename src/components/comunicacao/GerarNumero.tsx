import Area from "../template/Area";

interface GerarNumeroProps {
    numero1: number;
    numero2: number;
    gerarNumero: (numero: number) => void;
}


export default function GerarNumero({ numero1, numero2, gerarNumero }: GerarNumeroProps) {
    const min = Math.min(numero1, numero2);
    const max = Math.max(numero1, numero2);

    function gerar(){
      const aleatorio = Math.round(Math.random() * (max - min)) + min;
      gerarNumero(aleatorio);

    }
    return (
        <Area titulo="Gerar Número" cor="blue">
          <div className="flex flex-col items-center gap-5">
            <div className="flex gap-5">
              <span>Minimo: {min}</span>
              <span>Máximo: {max}</span>
            </div>
            <button onClick={gerar} className="btn">Gerar</button>
          </div>
        </Area>
        
    )
}