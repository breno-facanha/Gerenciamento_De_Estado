import Link from "next/link";
import React from "react";

interface MenuItemProps {
    icone: any
    texto: string
    url: string
}
export default function MenuItem({ icone, texto, url }: MenuItemProps) { 
    return (
        <Link href={url} className="flex flex-col items-center gap-2">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full p-5">
                {React.cloneElement(icone, {
                    size: 90,
                    strokeWidth: 1,
                    className: 'opacity-40'
                })}
            </div>
            <span className="opacity-30 font-black text-3xl">{texto}</span>
        </Link>
    );
}