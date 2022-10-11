import { pool } from "../database";

export const getEstudiante = async (req, res) => {
  try {
    pool.query(
      "SELECT est.idestudiante, est.nombre, est.apellidos, est.edad, est.peso, est.idescuela, esc.nombre escuela FROM estudiante est join escuela esc on est.idescuela=esc.idescuela ;",
      function (err, result) {
        console.log(result);
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar estudiante");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar estudiante");
  }
};
