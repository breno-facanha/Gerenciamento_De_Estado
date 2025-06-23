import Link from "next/link";

interface MenuItemProps {
    icone: any
    texto: string
    url: string
}
export default function MenuItem({ icone, texto, url }: MenuItemProps) { 
    return (
        <Link href={url}>
            <span>{icone}</span>
            <span>{texto}</span>
        </Link>
    );
}