import Image from "next/image";
import MenuItem from "@/components/template/MenuItem";
import { TbForms } from "react-icons/tb";



export default function Home() {
  return (
    <div>
      Navegação
      <div>
        <MenuItem icone={<TbForms />} texto="Estado" url="/revisao/estado" />
      </div>
    </div>
  );
}
