import { useContext } from "react";
import Area from "../template/Area";
import ContadorContext from "@/context/ContatorContext";

export default function Mais() {

    const {incrementar} = useContext(ContadorContext)

    return(
         <Area titulo="Botão Mais" cor="green">
            <button className="btn" onClick={incrementar}>
                +1
            </button>
        </Area>
    )
}