import MenuItem from "@/components/template/MenuItem";
import { TbForms } from "react-icons/tb";



export default function Home() {
  return (
    <div className="
        flex flex-col justify-center items-center h-screen 
        bg-gradient-to-br from-zinc-800 to-black gap-20
    ">
      <div className="text-6xl">
        <span className="opacity-40 font-thin">Gerenciamento de Estado</span>
        <span className="font-black bg-gradient-to-r from-blue-500 to-gray-500 text-transparent bg-clip-text">Estado</span>  
      </div>
      <div>
        <MenuItem icone={<TbForms />} texto="Estado" url="/revisao/estado" />
      </div>
    </div>
  );
}
