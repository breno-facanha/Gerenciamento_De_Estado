import instance from "@/instance";
import { useEffect, useState } from "react";

export default function Artilharia() {
  const [artilharia, setArtilharia] = useState([]);

  useEffect(() => {
    async function getArtilharia() {
      try {
        const response = await instance.get('/api/artilharia');
        setArtilharia(response.data);
      } catch (error) {
        console.error("Erro ao buscar artilharia:", error);
      }
    }
    getArtilharia();
  }, []);

  return (
    <div className="flex justify-center items-start p-8 bg-gray-50 min-h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-xl font-semibold mb-6 text-center text-purple-700">Artilharia</h1>
        <h1 className="text-xl font-semibold mb-6 text-center text-purple-700">Brasileiro Serie B</h1>
        <table className="w-full text-sm bg-white rounded shadow border border-purple-500 ">
          <thead >
            <tr>
              <th className="py-2 px-3 text-left font-medium border-b text-purple-700"></th>
              <th className="py-2 px-3 text-left font-medium border-b text-purple-700">Jogador</th>
              <th className="py-2 px-3 text-left font-medium border-b text-purple-700">Gols</th>
            </tr>
          </thead>
          <tbody>
            {artilharia.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-3 border-b border-purple-400">
                  <img
                    src={item.time.escudo}
                    alt={item.time.nome_popular}
                    className="w-6 h-6 object-contain"
                  />
                </td>
                <td className="py-2 px-3 border-b  text-purple-400">{item.atleta.nome_popular}</td>
                <td className="py-2 px-3 border-b  text-purple-400">{item.gols}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}