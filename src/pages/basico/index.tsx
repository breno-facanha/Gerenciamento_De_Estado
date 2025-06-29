import Mais from "@/components/basico/Mais";
import Menos from "@/components/basico/Menos";
import Valor from "@/components/basico/Valor";
import {ContadorProvider} from "@/context/ContatorContext";

export default function ExemploBasico(){
    return (
        <div className="flex flex-col gap-5 p-20">
            <ContadorProvider>
                <Valor></Valor>
                <div className="flex gap-5">
                    <Menos></Menos>
                    <Mais></Mais>
                </div>
            </ContadorProvider>
        </div>
    )
}