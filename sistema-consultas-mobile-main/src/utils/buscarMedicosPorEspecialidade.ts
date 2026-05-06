import { listarMedicos } from "../services/medicoService";
import { listarEspecialidades } from "../services/especialidadeService";

export async function buscarMedicosPorEspecialidade(nomeEspecialidade: string) {
  const especialidades = await listarEspecialidades();

  const especialidade = especialidades.find(
    e => e.nome.toLowerCase() === nomeEspecialidade.toLowerCase()
  );

  if (!especialidade) {
    console.log("Especialidade não encontrada");
    return [];
  }

  const medicos = await listarMedicos();

  return medicos.filter(m => m.especialidade.id === especialidade.id);
}
