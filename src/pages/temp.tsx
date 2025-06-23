import Area from "@/components/template/Area"

export default function Temp() {
    return (
        <div className=" flex flex-col gap-5 p-20">
            <Area titulo="Tesde do componente" cor="red">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Area>
            <Area titulo="Tesde do componente " sumario=" R$1.250,00" cor="blue">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Area>
        </div>
    )
}