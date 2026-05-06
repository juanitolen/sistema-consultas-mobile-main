import { useEffect, useState } from "react";
import { listarEspecialidades } from "./services/especialidadeService";
import { Especialidade } from "./types/especialidade";

function TesteEspecialidades() {
  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]);

  useEffect(() => {
    async function carregar() {
      const lista = await listarEspecialidades();
      console.log("Especialidades:", lista);
      setEspecialidades(lista);
    }
    carregar();
  }, []);

  return (
    <div>
      <h2>Especialidades ({especialidades.length})</h2>
      {especialidades.map(esp => (
        <div key={esp.id}>
          <strong>{esp.nome}</strong>
          {esp.descricao && <p>{esp.descricao}</p>}
        </div>
      ))}
    </div>
  );
}
