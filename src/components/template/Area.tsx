interface AreaProps {
    titulo: string
    sumario?: string
    children: any 
    cor: string
}
export default function Area({ titulo, children, sumario, cor }: AreaProps) {
    return(
        <div className={`
            flex flex-col items-center bg-${cor}-500
            rounded-md w-full
        `}>
            <div className={`
                flex w-full items-center ${sumario ? 'justify-between' : 'justify-center'}
                bg-black/20 h-14 text-3xl font-black
            `}>
                <span className="px-4">{titulo}</span>
                {sumario && (
                    <span className="flex items-center px-4 bg-black/20 h-full">{sumario}</span>
                )}
            </div>
            <div className="p-7">
                {children}
            </div>
        </div>
    )
}