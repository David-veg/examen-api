import { pool } from "../database";
export const getFacultades = async (req, res) => {
  try {
    pool.query("SELECT * FROM escuela;", function (err, result) {
      console.log(result);
      try {
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json("Error al listar estudiante");
      }
    });
  } catch (error) {
    return res.status(500).json("Error al listar estudiante");
  }
};
